import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

// Input sanitization utility functions
const sanitizeInput = (input: string): string => {
  // Remove HTML tags and potentially dangerous characters
  return input
    .replace(/<[^>]*>/g, '') // Remove HTML tags
    .replace(/[<>]/g, '') // Remove angle brackets
    .replace(/javascript:/gi, '') // Remove javascript: protocol
    .replace(/on\w+=/gi, '') // Remove event handlers
    .trim();
};

const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const validatePhone = (phone: string): boolean => {
  // Allow various phone formats: (123) 456-7890, 123-456-7890, 123.456.7890, 1234567890
  const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
  const cleanPhone = phone.replace(/[\s\-\(\)\.]/g, '');
  return phoneRegex.test(cleanPhone);
};

const validateName = (name: string): boolean => {
  // Allow letters, spaces, hyphens, and apostrophes for names
  const nameRegex = /^[a-zA-Z\s\-']{2,50}$/;
  return nameRegex.test(name);
};

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneType: 'Mobile',
    phoneNumber: '',
    visitDate: '',
    bringingChildren: '',
    firstTimeVisiting: false,
    lookingForChurch: false,
    newToArea: false,
    visitingFromOtherChurch: false
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    // Sanitize input before storing
    const sanitizedValue = sanitizeInput(value);
    
    setFormData(prev => ({
      ...prev,
      [field]: sanitizedValue
    }));

    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  const handleRadioChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      bringingChildren: value
    }));
  };

  const handleCheckboxChange = (field: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: checked
    }));
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    // Validate First Name
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    } else if (!validateName(formData.firstName)) {
      newErrors.firstName = 'Please enter a valid first name (2-50 characters, letters only)';
    }

    // Validate Last Name
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    } else if (!validateName(formData.lastName)) {
      newErrors.lastName = 'Please enter a valid last name (2-50 characters, letters only)';
    }

    // Validate Email
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Validate Phone Number
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone number is required';
    } else if (!validatePhone(formData.phoneNumber)) {
      newErrors.phoneNumber = 'Please enter a valid phone number';
    }

    // Validate Visit Date
    if (!formData.visitDate.trim()) {
      newErrors.visitDate = 'Please select a Sunday you would like to visit';
    }

    // Validate Children Question
    if (!formData.bringingChildren) {
      newErrors.bringingChildren = 'Please indicate if you will be bringing children';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Prevent double submission
    if (isSubmitting) return;
    
    setIsSubmitting(true);

    try {
      // Validate form
      if (!validateForm()) {
        setIsSubmitting(false);
        return;
      }

      // Additional security: Rate limiting check (simple implementation)
      const lastSubmission = localStorage.getItem('lastFormSubmission');
      const now = Date.now();
      if (lastSubmission && (now - parseInt(lastSubmission)) < 5000) {
        setErrors({ submit: 'Please wait 5 seconds before submitting again' });
        setIsSubmitting(false);
        return;
      }

      // Prepare data for submission (with additional sanitization)
      const submissionData = {
        firstName: sanitizeInput(formData.firstName),
        lastName: sanitizeInput(formData.lastName),
        email: formData.email.toLowerCase().trim(),
        phoneType: formData.phoneType,
        phoneNumber: formData.phoneNumber.replace(/[\s\-\(\)\.]/g, ''), // Clean phone number
        visitDate: formData.visitDate,
        bringingChildren: formData.bringingChildren,
        firstTimeVisiting: formData.firstTimeVisiting,
        lookingForChurch: formData.lookingForChurch,
        newToArea: formData.newToArea,
        visitingFromOtherChurch: formData.visitingFromOtherChurch,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        ipAddress: 'client-side' // Will be captured server-side
      };

      console.log('Form submitted:', submissionData);

      // Store submission timestamp for rate limiting
      localStorage.setItem('lastFormSubmission', now.toString());

      // TODO: Send data to your backend/email service
      // Example: await submitForm(submissionData);

      // Reset form on successful submission
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phoneType: 'Mobile',
        phoneNumber: '',
        visitDate: '',
        bringingChildren: '',
        firstTimeVisiting: false,
        lookingForChurch: false,
        newToArea: false,
        visitingFromOtherChurch: false
      });

      // Show success message
      alert('Thank you! Your visit information has been submitted successfully.');

    } catch (error) {
      console.error('Form submission error:', error);
      setErrors({ submit: 'There was an error submitting your form. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full bg-white p-8">
      <div className="max-w-2xl mx-auto">
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Header */}
          <div className="text-center mb-8">
            <p className="text-xl text-gray-600">
              We're excited to meet you and welcome you into our church family. Come experience the love of Christ in our community.
            </p>
          </div>

          {/* Instructions */}
          <p className="text-base text-gray-600 mb-8">
            Fields marked with an <span className="text-red-500">*</span> are required
          </p>

          {/* Personal Information Section */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900">Your name <span className="text-red-500">*</span></h3>
            
            {/* First Name */}
            <div>
              <Label htmlFor="firstName" className="text-base font-medium text-gray-700">
                First name
              </Label>
              <Input
                id="firstName"
                type="text"
                required
                value={formData.firstName}
                onChange={(e) => handleInputChange('firstName', e.target.value)}
                className={`mt-2 w-full border rounded-md px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-[#244363] focus:border-transparent ${
                  errors.firstName ? 'border-red-500' : 'border-gray-300'
                }`}
                maxLength={50}
              />
              {errors.firstName && (
                <p className="text-red-500 text-base mt-2">{errors.firstName}</p>
              )}
            </div>

            {/* Last Name */}
            <div>
              <Label htmlFor="lastName" className="text-base font-medium text-gray-700">
                Last name
              </Label>
              <Input
                id="lastName"
                type="text"
                required
                value={formData.lastName}
                onChange={(e) => handleInputChange('lastName', e.target.value)}
                className={`mt-2 w-full border rounded-md px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-[#244363] focus:border-transparent ${
                  errors.lastName ? 'border-red-500' : 'border-gray-300'
                }`}
                maxLength={50}
              />
              {errors.lastName && (
                <p className="text-red-500 text-base mt-2">{errors.lastName}</p>
              )}
            </div>
          </div>

          {/* Email */}
          <div>
            <Label htmlFor="email" className="text-base font-medium text-gray-700">
              Email address <span className="text-red-500">*</span>
            </Label>
            <Input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className={`mt-2 w-full border rounded-md px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-[#244363] focus:border-transparent ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
              maxLength={100}
              placeholder="name@example.com"
            />
            {errors.email && (
              <p className="text-red-500 text-base mt-2">{errors.email}</p>
            )}
          </div>

          {/* Phone Number */}
          <div>
            <Label htmlFor="phoneType" className="text-base font-medium text-gray-700">
              Phone number <span className="text-red-500">*</span>
            </Label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
              <Select value={formData.phoneType} onValueChange={(value) => setFormData(prev => ({ ...prev, phoneType: value }))}>
                <SelectTrigger className="border border-gray-300 rounded-md px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-[#244363] focus:border-transparent">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Mobile">Mobile</SelectItem>
                  <SelectItem value="Home">Home</SelectItem>
                  <SelectItem value="Work">Work</SelectItem>
                </SelectContent>
              </Select>
              <Input
                id="phoneNumber"
                type="tel"
                required
                value={formData.phoneNumber}
                onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                className={`w-full border rounded-md px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-[#244363] focus:border-transparent ${
                  errors.phoneNumber ? 'border-red-500' : 'border-gray-300'
                }`}
                maxLength={20}
                placeholder="(123) 456-7890"
              />
            </div>
            {errors.phoneNumber && (
              <p className="text-red-500 text-base mt-2">{errors.phoneNumber}</p>
            )}
          </div>

          {/* Visit Details Section */}
          <div className="space-y-6">
            {/* Visit Date */}
            <div>
              <Label htmlFor="visitDate" className="text-base font-medium text-gray-700">
                Please select a Sunday you would like to visit: <span className="text-red-500">*</span>
              </Label>
              <Input
                id="visitDate"
                type="date"
                required
                value={formData.visitDate}
                onChange={(e) => handleInputChange('visitDate', e.target.value)}
                className={`mt-2 w-full border rounded-md px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-[#244363] focus:border-transparent ${
                  errors.visitDate ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.visitDate && (
                <p className="text-red-500 text-base mt-2">{errors.visitDate}</p>
              )}
            </div>
          </div>

          {/* Visitor(s) Information Section */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900">Visitor(s) Information</h3>
            <div>
              <Label className="text-base font-medium text-gray-700">
                Will you be bringing any children (ages infant through middle school) with you? <span className="text-red-500">*</span>
              </Label>
              <RadioGroup
                value={formData.bringingChildren}
                onValueChange={handleRadioChange}
                className="mt-3 space-y-3"
              >
                <div className="flex items-center space-x-3">
                  <RadioGroupItem value="Yes" id="children-yes" className="w-5 h-5" />
                  <Label htmlFor="children-yes" className="text-base text-gray-700">Yes</Label>
                </div>
                <div className="flex items-center space-x-3">
                  <RadioGroupItem value="No" id="children-no" className="w-5 h-5" />
                  <Label htmlFor="children-no" className="text-base text-gray-700">No</Label>
                </div>
              </RadioGroup>
              {errors.bringingChildren && (
                <p className="text-red-500 text-base mt-2">{errors.bringingChildren}</p>
              )}
            </div>
          </div>

          {/* Additional Information Section */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900">Additional Information</h3>
            <div>
              <Label className="text-base font-medium text-gray-700">
                Please check any options below that describe your status?
              </Label>
              <div className="mt-3 space-y-3">
                {[
                  { key: 'firstTimeVisiting', label: 'This is my first time visiting' },
                  { key: 'lookingForChurch', label: 'I\'m looking for a new church home' },
                  { key: 'newToArea', label: 'I am new to the area' },
                  { key: 'visitingFromOtherChurch', label: 'I attend a different church (just visiting)' }
                ].map((option) => (
                  <div key={option.key} className="flex items-center space-x-3">
                    <Checkbox
                      id={option.key}
                      checked={formData[option.key as keyof typeof formData] as boolean}
                      onCheckedChange={(checked) => handleCheckboxChange(option.key, checked as boolean)}
                      className="border-gray-300 rounded focus:ring-[#244363] w-5 h-5"
                    />
                    <Label htmlFor={option.key} className="text-base text-gray-700">
                      {option.label}
                    </Label>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gray-700 text-white py-4 px-8 rounded-md hover:bg-gray-800 transition-colors font-medium text-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </Button>

          {/* General error message */}
          {errors.submit && (
            <p className="text-red-500 text-base text-center">{errors.submit}</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
