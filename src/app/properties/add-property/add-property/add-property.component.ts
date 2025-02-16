import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { PropertyService } from '../../../services/property.service';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css'],
})
export class AddPropertyComponent {
  propertyForm: FormGroup;
  fileErrors: string[] = [];
  selectedFiles: File[] = [];
  isLoading = false;

  constructor(
    private fb: FormBuilder,
    private propertyService: PropertyService
  ) {
    this.propertyForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(5)]],
      type: ['', Validators.required],
      description: ['', [Validators.required, Validators.minLength(20)]],
      propertyType: ['', Validators.required],
      price: [null, [Validators.required, Validators.min(1)]],
      squareFootage: [null, [Validators.required, Validators.min(1)]],
      city: ['', Validators.required],
      address: ['', Validators.required],
      phone: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[0-9]{10,15}$/), // Ensures phone number has 10-15 digits
        ],
      ],
      confirmPolicies: [false, Validators.requiredTrue], // Ensures the checkbox is checked
    });
  }

  // Handle file selection and validation
  onFileChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      this.selectedFiles = Array.from(input.files);
      this.fileErrors = [];

      // Validate each file (e.g., max size: 2MB)
      this.selectedFiles.forEach((file) => {
        if (file.size > 2 * 1024 * 1024) {
          this.fileErrors.push(`${file.name} exceeds the 2MB size limit.`);
        }
      });

      // Ensure a maximum of 5 files
      if (this.selectedFiles.length > 5) {
        this.fileErrors.push('You can upload a maximum of 5 files.');
      }
    }
  }

  // Handle form submission
  onSubmit(): void {
    if (this.propertyForm.valid && this.fileErrors.length === 0) {
      if (this.selectedFiles.length === 0) {
        alert('Please upload at least one image.');
        return;
      }

      this.isLoading = true;
      const formData = new FormData();

      Object.keys(this.propertyForm.value).forEach((key) => {
        formData.append(key, this.propertyForm.value[key]);
      });

      // Add files to the form data
      this.selectedFiles.forEach((file) => {
        formData.append('images', file);
      });

      // Submit the form data (replace with your service call)
      this.propertyService.addProperty(formData).subscribe(
        (response) => {
          console.log('Property submitted successfully:', response);
          alert('Property added successfully!');
          this.isLoading = false;
        },
        (error) => {
          console.error('Error submitting property:', error);
          const errorMessage =
            error.error?.message || 'Failed to add property. Please try again.';
          alert(errorMessage);
        }
      );
    } else {
      console.error('Form is invalid or there are file errors.');
    }
  }
}
