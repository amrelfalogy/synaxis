import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { PropertyService } from '../../../services/property.service';
import { CarService } from 'src/app/services/car.service';
import { JobService } from 'src/app/services/job.service';
import { LanguageService } from 'src/app/services/languages.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css'],
})
export class AddPropertyComponent {
  selectedType: string = 'property'; // Default selected type
  propertyForm: FormGroup;
  carForm: FormGroup;
  jobForm: FormGroup;
  fileErrors: string[] = [];
  selectedFiles: File[] = [];
  isLoading = false;
  isArabic: boolean = false;

  constructor(
    private fb: FormBuilder,
    private propertyService: PropertyService,
    private carService:CarService,
    private jobService:JobService,
    private languageService: LanguageService,
    private snackBar: MatSnackBar
  ) {
    this.propertyForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(5)]],
      type: ['', Validators.required],
      description: ['', [Validators.required, Validators.minLength(20)]],
      propertyType: ['', Validators.required],
      price: [null, [Validators.required, Validators.min(2)]],
      squareFootage: [null, [Validators.required, Validators.min(2)]],
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


// Initialize Car Form
this.carForm = this.fb.group({
  title: ['', [Validators.required, Validators.minLength(3)]],
  description: ['', [Validators.required, Validators.minLength(20)]],
  city: ['', Validators.required],
  model: ['', Validators.required],
  year: [null, [Validators.required, Validators.min(1900), Validators.max(new Date().getFullYear())]],
  mileage: [null, [Validators.required, Validators.min(0)]],
  price: [null, [Validators.required, Validators.min(1)]],
  phone: [
    '',
    [
      Validators.required,
      Validators.pattern(/^[\d\+\-\(\) ]{10,20}$/) 
    ],
  ],
   confirmPolicies: [false, Validators.requiredTrue], 
});

// Initialize Job Form
this.jobForm = this.fb.group({
  title: ['', [Validators.required, Validators.minLength(3)]],
  description: ['', [Validators.required, Validators.minLength(20)]],
  city: ['', Validators.required],
  salary: [null, [Validators.required, Validators.min(1)]],
  yearsOfExperience: [null, [Validators.required, Validators.min(0)]],
  jobType: ['', Validators.required],
  industry: ['', Validators.required],
  phone: [
    '',
    [
      Validators.required,
      Validators.pattern(/^[\d\+\-\(\) ]{10,20}$/)
    ],
  ],
   confirmPolicies: [false, Validators.requiredTrue], // Ensures the checkbox is checked
});
// Subscribe to language changes
    this.languageService.currentLanguage$.subscribe((lang) => {
      this.isArabic = lang === 'ar';
    });
  }

   // Handle ad type selection
  selectAdType(type: string): void {
    this.selectedType = type;
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

      // **Set the images FormControl value for carForm**
      if (this.selectedType === 'car') {
      this.carForm.get('images')?.setValue(this.selectedFiles.length ? this.selectedFiles : null);
      this.carForm.get('images')?.updateValueAndValidity();
    }
    }
  }

  // Handle form submission
  onSubmitProperty(): void {
    if (this.propertyForm.valid && this.fileErrors.length === 0) {
      if (this.selectedFiles.length === 0) {
        this.snackBar.open('Please upload at least one image.', 'Close', { duration: 3000, panelClass: 'snackbar-error' });
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
         this.snackBar.open('Property added successfully!', 'Close', { duration: 3000, panelClass: 'snackbar-success' });
          this.isLoading = false;
           this.propertyForm.reset(); // Reset the form
        this.selectedFiles = []; // Clear selected files
        },
        (error) => {
          const errorMessage =
            error.error?.message || 'Failed to add property. Please try again.';
          this.snackBar.open(errorMessage, 'Close', { duration: 3000, panelClass: 'snackbar-error' });
          this.isLoading = false;
        }
      );
    } else {
      this.snackBar.open('Form is invalid or there are file errors.', 'Close', { duration: 3000, panelClass: 'snackbar-error' });
    }
  }

    onSubmitCar(): void {
  if (this.carForm.valid && this.fileErrors.length === 0) {
    if (this.selectedFiles.length === 0) {
      this.snackBar.open('Please upload at least one image.', 'Close', { duration: 3000, panelClass: 'snackbar-error' });
      return;
    }

    this.isLoading = true;
    const formData = new FormData();

    // Append form fields to FormData
    Object.keys(this.carForm.value).forEach((key) => {
      formData.append(key, this.carForm.value[key]);
    });

    // Add files to the form data
    this.selectedFiles.forEach((file) => {
      formData.append('images', file);
    });

    // Submit the form data
    this.carService.addCar(formData).subscribe(
      (response) => {
         this.snackBar.open('Car added successfully!', 'Close', { duration: 3000, panelClass: 'snackbar-success' });
        this.isLoading = false;
        this.carForm.reset(); // Reset the form
        this.selectedFiles = []; // Clear selected files
      },
      (error) => {
        const errorMessage =
          error.error?.message || 'Failed to add car. Please try again.';
        this.snackBar.open(errorMessage, 'Close', { duration: 3000, panelClass: 'snackbar-error' });
        this.isLoading = false;
      }
    );
  } else {
    this.snackBar.open('Car form is invalid or there are file errors.', 'Close', { duration: 3000, panelClass: 'snackbar-error' });
  }
}

 onSubmitJob(): void {
  if (this.jobForm.valid) {
    this.isLoading = true;
    this.jobService.addJob(this.jobForm.value).subscribe(
      (response) => {
      this.snackBar.open('Job added successfully!', 'Close', { duration: 3000, panelClass: 'snackbar-success' });
        this.isLoading = false;
        this.jobForm.reset(); // Reset the form
      },
      (error) => {
        const errorMessage =
          error.error?.message || 'Failed to add job. Please try again.';
      this.snackBar.open(errorMessage, 'Close', { duration: 3000, panelClass: 'snackbar-error' });
        this.isLoading = false;
      }
    );
  }
}
  
}
