"use client";
import React, { useState } from "react";
import {
  Plus,
  Factory,
  MapPin,
  Persons,
  ChevronsRight,
  Pencil,
  Check,
  Xmark,
  CloudArrowUpIn,
  Text,
} from "@gravity-ui/icons";
import {
  Form,
  TextField,
  Label,
  Input,
  FieldError,
  Button,
  Card,
  Chip,
} from "@heroui/react";
import { createRecruiterCompany } from "@/lib/actions/company";

const IMGBB_API_KEY = process.env.NEXT_PUBLIC_IMAGE_API_KEY;

export default function CompanyProfileManager({ user, recruiterCompany }) {
  const [companyData, setCompanyData] = useState(recruiterCompany);
  const [isEditing, setIsEditing] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [imagePreview, setImagePreview] = useState("");
  // ✅ Added error state for user feedback
  const [submitError, setSubmitError] = useState("");

  const statusColors = {
    Approved: "success",
    Pending: "warning",
    Rejected: "danger",
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const uploadToImgBB = async (file) => {
    const formData = new FormData();
    formData.append("image", file);
    try {
      const response = await fetch(
        `https://api.imgbb.com/1/upload?key=${IMGBB_API_KEY}`,
        { method: "POST", body: formData },
      );
      if (!response.ok) throw new Error("ImgBB upload failed");
      const result = await response.json();
      return result.data.url;
    } catch (error) {
      console.error("Error uploading image to ImgBB:", error);
      return null;
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    const formElements = new FormData(e.currentTarget);
    const data = {};
    formElements.forEach((value, key) => {
      data[key] = value.toString();
    });

    try {
      let finalLogoUrl = imagePreview;

      if (selectedFile) {
        const uploadedUrl = await uploadToImgBB(selectedFile);
        if (uploadedUrl) finalLogoUrl = uploadedUrl;
      }

      const profilePayload = {
        // ✅ FIX 1: Use a consistent "name" key everywhere
        name: data.companyName,
        industry: data.industry,
        location: data.location,
        employeeCount: data.employeeCount,
        description: data.description,
        logoUrl: finalLogoUrl || "https://placehold.co/150x150?text=No+Logo",
        // ✅ FIX 2: Retain existing status on edit, default "Pending" on first register
        status: companyData?.status || "Pending",
        recruiterID: user?.id,
        recruiterName: user?.name,
      };

      // ✅ FIX 3: Only update state AFTER the DB call succeeds
      const res = await createRecruiterCompany(profilePayload);

      if (res?.error) {
        setSubmitError(res.error);
        return;
      }

      // ✅ Now safe to update UI state
      setCompanyData(profilePayload);
      setIsEditing(false);
      setSelectedFile(null);
    } catch (err) {
      console.error("Submission failed:", err);
      setSubmitError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // -------------------------------------------------------------
  // VIEW 1: EMPTY STATE
  // -------------------------------------------------------------
  if (!companyData && !isEditing) {
    return (
      <div className="max-w-4xl mx-auto py-16 px-4">
        <Card className="border-1 border-dashed border-default-300 bg-background/50 backdrop-blur-md py-12">
          <Card.Content className="flex flex-col items-center justify-center text-center gap-5">
            <div className="p-4 bg-primary-50 rounded-full text-primary">
              <Factory width={40} height={40} />
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl font-bold tracking-tight text-foreground">
                No Registered Workspace Found
              </h2>
              <p className="text-default-500 max-w-sm mx-auto text-sm">
                As a new recruiter on HireLoop, you must register your company
                details before publishing job circulars.
              </p>
            </div>
            <Button
              color="primary"
              variant="solid"
              className="font-semibold shadow-md px-6"
              onPress={() => setIsEditing(true)}
              endContent={<Plus />}
            >
              Register Company
            </Button>
          </Card.Content>
        </Card>
      </div>
    );
  }

  // -------------------------------------------------------------
  // VIEW 2: REGISTRATION & EDIT FORM
  // -------------------------------------------------------------
  if (isEditing) {
    return (
      <div className="max-w-3xl mx-auto py-8 px-4">
        <Card className="shadow-sm border-1 border-default-200">
          <Card.Content className="p-6 md:p-8">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-foreground">
                {companyData
                  ? "Update Company Information"
                  : "Company Profile Registration"}
              </h2>
              <p className="text-xs text-default-400 mt-1">
                Provide clear workspace parameters for candidates looking at
                your jobs.
              </p>
            </div>

            <Form className="flex flex-col gap-6" onSubmit={handleFormSubmit}>
              {/* Logo Upload */}
              <div className="flex flex-col sm:flex-row items-center gap-5 p-4 bg-default-50 rounded-xl border-1 border-default-100">
                <div className="w-20 h-20 bg-default-200 rounded-xl overflow-hidden flex items-center justify-center border border-default-300">
                  {imagePreview ? (
                    <img
                      src={imagePreview}
                      alt="Logo preview"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <Factory
                      width={28}
                      height={28}
                      className="text-default-400"
                    />
                  )}
                </div>
                <div className="flex-1 space-y-1.5 w-full text-center sm:text-left">
                  <label className="inline-flex items-center gap-2 px-4 py-2 bg-background border border-default-300 text-default-700 rounded-lg text-xs font-medium cursor-pointer hover:bg-default-100 transition-colors">
                    <CloudArrowUpIn />
                    Choose Brand Asset
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={handleFileChange}
                    />
                  </label>
                  <p className="text-[11px] text-default-400">
                    Will be converted via ImgBB CDN hosting automatically
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* ✅ FIX 4: defaultValue now correctly reads companyData.name */}
                <TextField
                  isRequired
                  name="companyName"
                  defaultValue={companyData?.name || ""}
                >
                  <Label className="text-xs font-semibold text-foreground">
                    Company Name
                  </Label>
                  <Input
                    placeholder="e.g. Creative IT Solutions"
                    variant="bordered"
                    startContent={<Factory className="text-default-400" />}
                  />
                  <FieldError />
                </TextField>

                <TextField
                  isRequired
                  name="industry"
                  defaultValue={companyData?.industry || ""}
                >
                  <Label className="text-xs font-semibold text-foreground">
                    Industry Sector
                  </Label>
                  <Input
                    placeholder="e.g. Information Technology"
                    variant="bordered"
                    startContent={
                      <ChevronsRight className="text-default-400" />
                    }
                  />
                  <FieldError />
                </TextField>

                <TextField
                  isRequired
                  name="location"
                  defaultValue={companyData?.location || ""}
                >
                  <Label className="text-xs font-semibold text-foreground">
                    HQ Location
                  </Label>
                  <Input
                    placeholder="e.g. Dhaka, Bangladesh"
                    variant="bordered"
                    startContent={<MapPin className="text-default-400" />}
                  />
                  <FieldError />
                </TextField>

                <TextField
                  isRequired
                  name="employeeCount"
                  defaultValue={companyData?.employeeCount || ""}
                >
                  <Label className="text-xs font-semibold text-foreground">
                    Employee Size
                  </Label>
                  <Input
                    placeholder="e.g. 100-150 Employees"
                    variant="bordered"
                    startContent={<Persons className="text-default-400" />}
                  />
                  <FieldError />
                </TextField>
              </div>

              <TextField
                isRequired
                name="description"
                defaultValue={companyData?.description || ""}
              >
                <Label className="text-xs font-semibold text-foreground">
                  Company Overview
                </Label>
                <Input
                  placeholder="Describe your corporate history, core products or tech stacks..."
                  variant="bordered"
                  startContent={
                    <Text className="text-default-400 self-start mt-2.5" />
                  }
                  className="min-h-[100px]"
                />
                <FieldError />
              </TextField>

              {/* ✅ Show submission error if DB call fails */}
              {submitError && (
                <p className="text-sm text-danger font-medium">{submitError}</p>
              )}

              <div className="flex items-center gap-2.5 justify-end border-t border-default-100 pt-4">
                <Button
                  type="button"
                  variant="flat"
                  color="default"
                  disabled={isSubmitting}
                  onPress={() => {
                    // ✅ FIX 5: Cancel always exits edit mode cleanly
                    setIsEditing(false);
                    setImagePreview(companyData?.logoUrl || "");
                    setSelectedFile(null);
                    setSubmitError("");
                  }}
                  startContent={<Xmark />}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  variant="solid"
                  color="primary"
                  className="font-semibold shadow-sm min-w-[120px]"
                  isLoading={isSubmitting}
                  startContent={!isSubmitting && <Check />}
                >
                  {isSubmitting ? "Uploading..." : "Save Details"}
                </Button>
              </div>
            </Form>
          </Card.Content>
        </Card>
      </div>
    );
  }

  // -------------------------------------------------------------
  // VIEW 3: PROFILE DETAILS SCREEN
  // -------------------------------------------------------------
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <Card className="shadow-sm border-1 border-default-200 bg-background overflow-hidden">
        <div className="h-32 w-full bg-gradient-to-r from-primary-500/10 to-secondary-500/10 border-b border-default-100" />

        <Card.Content className="p-6 relative pt-0">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 -mt-12 mb-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-end gap-4">
              <div className="w-24 h-24 rounded-2xl border-4 border-background bg-background shadow-md overflow-hidden flex items-center justify-center">
                <img
                  src={companyData.logoUrl}
                  // ✅ FIX 6: was companyData.name (undefined) — now correctly mapped
                  alt={companyData.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-1">
                <div className="flex items-center flex-wrap gap-2.5">
                  <h1 className="text-2xl font-bold tracking-tight text-foreground">
                    {companyData.name}
                  </h1>
                  <Chip
                    color={statusColors[companyData.status] || "default"}
                    variant="flat"
                    size="sm"
                    className="font-semibold px-2"
                  >
                    {companyData.status}
                  </Chip>
                </div>
                <p className="text-sm font-medium text-primary flex items-center gap-1">
                  <ChevronsRight width={14} height={14} />{" "}
                  {companyData.industry}
                </p>
              </div>
            </div>

            <Button
              variant="bordered"
              color="default"
              size="sm"
              className="font-medium bg-background border-default-300 hover:bg-default-50"
              startContent={<Pencil width={14} height={14} />}
              onPress={() => {
                setImagePreview(companyData.logoUrl);
                setIsEditing(true);
              }}
            >
              Edit Profile
            </Button>
          </div>

          <hr className="border-default-100 my-4" />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div className="flex items-center gap-3 p-3 bg-default-50 rounded-xl border border-default-100">
              <div className="p-2 bg-background text-default-500 rounded-lg shadow-2xs border border-default-200">
                <MapPin width={16} height={16} />
              </div>
              <div>
                <p className="text-[11px] font-medium text-default-400 uppercase tracking-wider">
                  Corporate Headquarters
                </p>
                <p className="text-sm font-semibold text-foreground">
                  {companyData.location}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 bg-default-50 rounded-xl border border-default-100">
              <div className="p-2 bg-background text-default-500 rounded-lg shadow-2xs border border-default-200">
                <Persons width={16} height={16} />
              </div>
              <div>
                <p className="text-[11px] font-medium text-default-400 uppercase tracking-wider">
                  Workforce Size
                </p>
                <p className="text-sm font-semibold text-foreground">
                  {companyData.employeeCount}
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-sm font-bold text-foreground flex items-center gap-1.5">
              <Text width={16} height={16} className="text-default-400" />
              Company Overview
            </h3>
            <p className="text-sm text-default-600 leading-relaxed bg-default-50/50 p-4 rounded-xl border border-default-100">
              {companyData.description}
            </p>
          </div>
        </Card.Content>
      </Card>
    </div>
  );
}
