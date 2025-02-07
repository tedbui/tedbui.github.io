# React Portfolio Development Guide

## Overview

This guide provides instructions for developers on how to add new Experience and Extracurricular entries to the portfolio project.

## 1. Adding New Experiences

### Prerequisites

- Ensure you have the necessary image files for the company logo and experience images
- Images should be placed in the appropriate directory: `src/images/experience/`

### Steps to Add a New Experience

1. Open `src/components/Experiences/index.js`

2. Locate the `experiences` array within the `Experiences` component

3. Add a new object to the `experiences` array with the following structure:

```javascript
{
  position: "Your Job Title",
  date: "Start Date - End Date",
  company: "Company Name",
  address: "Location", // Optional
  link: "Company Website URL", // Optional
  fullyDescription: [
    "Achievement or responsibility 1",
    "Achievement or responsibility 2",
    // Add more achievements as needed
  ],
  icon: [imageImport1, imageImport2], // Optional: Multiple experience images
  companyLogo: companyLogoImport // Company logo image
}
```

4. Import any new images at the top of the file:

```javascript
// Import company logo
import newCompanyLogo from "../../images/experience/companyLogo/newCompanyLogo.png";

// Import experience images (if applicable)
import newExperienceImage1 from "../../images/experience/newExperienceImage1.jpg";
import newExperienceImage2 from "../../images/experience/newExperienceImage2.png";
```

### Image Requirements

- Company Logo:

  - Recommended size: Around 150x150 pixels
  - Preferred formats: PNG, JPEG
  - Place in `src/images/experience/companyLogo/`

- Experience Images (optional):
  - Place in `src/images/experience/`
  - Varied formats accepted (PNG, JPEG, AVIF, etc.)

## 2. Adding New Extracurricular Activities

### Prerequisites

- Prepare image files for the project icon and preview images
- Images should be placed in the appropriate directory: `src/images/projects/` or `src/images/photography/`

### Steps to Add a New Extracurricular Activity

1. Open `src/components/Extracurricular/index.js`

2. Locate the `projects` array within the `Extracurricular` component

3. Add a new object to the `projects` array with the following structure:

```javascript
{
  image: projectIconImage, // Main icon/thumbnail
  title: "Project Title",
  date: "Project Date",
  fullDescription: `Detailed description of the project or activity`,
  imagePreview: [
    image1,
    image2,
    image3,
    // Add more preview images as needed
  ]
}
```

4. Import the new images at the top of the file:

```javascript
// Import project icon
import newProjectIcon from "../../images/projects/newProjectIcon.png";

// Import preview images
import newPreviewImage1 from "../../images/photography/newProject/image1.jpg";
import newPreviewImage2 from "../../images/photography/newProject/image2.png";
```

### Image Requirements

- Project Icon:

  - Recommended size: Around 150x150 pixels
  - Place in `src/images/projects/`

- Preview Images:
  - Place in appropriate subdirectory (e.g., `src/images/photography/projectName/`)
  - Supports various image formats

## Best Practices

- Maintain consistent image quality and sizing
- Write clear, concise descriptions
- Include meaningful achievements in experience descriptions
- Ensure all links and dates are accurate

## Troubleshooting

- If images don't display, double-check import paths
- Verify image file formats and sizes
- Ensure imported images are in the correct directories

## Responsive Design

The components are designed to be responsive:

- Desktop: Displays up to 5 items in a row
- Tablet: Displays 3 items in a row
- Mobile: Displays 1 item per row

## Notes

- The grid layout will automatically adjust based on the number of items
- No additional configuration is needed when adding new items


## 3. Adding New Projects

### Prerequisites
- Prepare image files for project icon and preview image
- Images should be placed in the appropriate directory: `src/images/projects/`

### Steps to Add a New Project

1. Open `src/components/Projects/index.js`

2. Locate the `projects` array within the `Projects` component

3. Add a new object to the `projects` array with the following structure:
```javascript
{
  image: projectIconImage, // Main icon/thumbnail
  title: "Project Title",
  date: "Project Date",
  fullDescription: `Detailed description of the project`,
  imagePreview: projectPreviewImage
}
```

4. Import the new images at the top of the file:
```javascript
// Import project icon
import newProjectIcon from "../../images/projects/newProjectIcon.png";

// Import preview image
import newProjectPreview from "../../images/projects/newProjectPreview.jpg";
```

### Image Requirements
- Project Icon: 
  - Recommended size: Around 150x150 pixels
  - Place in `src/images/projects/`

- Preview Image:
  - Single image displayed in the popup
  - Place in `src/images/projects/`
  - Supports various image formats (PNG, JPEG, etc.)

## Best Practices
- Write clear, concise project descriptions
- Use high-quality, relevant images
- Ensure dates and titles are accurate

## Responsive Design
The Projects component is responsive:
- Desktop: Displays up to 5 items in a row
- Tablet: Displays 3 items in a row
- Mobile: Displays 1 item per row

## Troubleshooting
- If images don't display, verify import paths
- Check image file formats and sizes
- Ensure imported images are in the correct directories


## 4. Modify About Section (`about`)

### Structure
```javascript
{
  id: "string", // Section identifier
  lightBg: boolean, // Background light/dark toggle
  lightText: boolean, // Text color variant
  lightTextDesc: boolean, // Description text color variant
  topLine: "string", // Top line description
  headline: "string", // Main headline
  description: "string", // Full description text
  buttonLabel: "string", // Button text
  imgStart: boolean, // Image positioning
  img: require("path/to/image"), // Profile image
  alt: "string", // Image alt text
  dark: boolean, // Dark mode toggle
  primary: boolean, // Primary color variant
  darkText: boolean // Text color variant
}
```

### How to Modify
- Update any field directly in the object
- For image changes, use `require()` with new image path

## Contact Section (`contact`)

### Structure
Similar to About section, with specific fields for contact/graduating information

### Modification Steps
- Update text fields as needed
- Change image using `require()`

## Key Considerations
- Maintain consistent boolean logic
- Ensure image paths are correct
- Keep description concise and meaningful

# 5. Resume Section Documentation

## Overview
This guide explains how to add new entries to the Education and Work Experience sections of the Resume component.

## Prerequisites
- Ensure all company/institution images are placed in `src/images/resume/`
- Images should be imported at the top of `index.js`

### 5.1. Adding New Education Entry

#### Location
Open `src/components/Resume/index.js` and locate the `EducationContainer` component within the `showEducation` conditional render.

#### Structure
Add a new `VerticalTimelineElement` inside the `VerticalTimeline` component:

```jsx
<VerticalTimelineElement
  date="Start Date - End Date"
  iconStyle={{ background: "#F6AE2D", color: "white" }}
  icon={<FaGraduationCap />}
>
  <ElementTitle className="vertical-timeline-element-title">
    <Link href="institution-website" target="_blank">
      Institution Name
    </Link>
  </ElementTitle>
  <ElementSubtitle className="vertical-timeline-element-subtitle">
    Location
  </ElementSubtitle>
  <ResumeExperienceSubtitle>
    Grade: X.X/X.X (if applicable)
  </ResumeExperienceSubtitle>
  <ResumeExperienceSubtitle>
    Degree/Program Details
  </ResumeExperienceSubtitle>
</VerticalTimelineElement>
```

### 5.2. Adding New Work Experience Entry

#### Location
Open `src/components/Resume/index.js` and locate the `WorkContainer` component within the `!showEducation` conditional render.

#### Structure
Add a new `VerticalTimelineElement` inside the `VerticalTimeline` component:

```jsx
<VerticalTimelineElement
  iconStyle={{ background: "#F6AE2D", color: "white" }}
  icon={<MdWork />}
>
  <ElementTitle className="vertical-timeline-element-title">
    <Link href="company-website" target="_blank">
      Position Title
    </Link>
  </ElementTitle>
  <ResumeExperienceSubtitle className="vertical-timeline-element-subtitle">
    Start Date - End Date
  </ResumeExperienceSubtitle>
  <ResumeExperienceSubtitle className="vertical-timeline-element-subtitle">
    Company Name
  </ResumeExperienceSubtitle>
  <ResumeExperienceSubtitle className="vertical-timeline-element-subtitle">
    Location
  </ResumeExperienceSubtitle>
  <SeeMoreButton
    onClick={() =>
      openPopup(
        <div style={{
          maxHeight: "600px",
          overflowY: "auto",
          paddingRight: "10px",
        }}>
          <ElementSubtitle2>
            Brief role description
          </ElementSubtitle2>
          <PopupImagePreview src={companyImage}></PopupImagePreview>
          <ElementSubtitle3>
            {<Link href="company-website">Company Name</Link>} |
            LOCATION | POSITION | DATE RANGE
          </ElementSubtitle3>
          <br></br>
          <u><strong>WHAT I DID:</strong><br></br></u>
          <strong>Summary of role and achievements</strong>
          <ElementList>
            <br></br>
            <ElementListItem>
              <strong>Challenge:</strong>
              <ul style={{ paddingLeft: "15px" }}>
                <li>Main challenge faced</li>
              </ul>
            </ElementListItem>
            <ElementListItem>
              <strong>Strategic Approach:</strong>
              <ul style={{ paddingLeft: "15px" }}>
                <li>Strategy point 1</li>
                <li>Strategy point 2</li>
              </ul>
            </ElementListItem>
            <ElementListItem>
              <strong>Key Achievements:</strong>
              <ul style={{ paddingLeft: "15px" }}>
                <li>Achievement 1 with metrics</li>
                <li>Achievement 2 with metrics</li>
              </ul>
            </ElementListItem>
            <ElementListItem>
              <strong>Impact:</strong>
              <ul style={{ paddingLeft: "15px" }}>
                <li>Business impact 1</li>
                <li>Business impact 2</li>
              </ul>
            </ElementListItem>
          </ElementList>
        </div>,
        "company-website",
        "Company Name",
        "Position Title"
      )
    }
  >
    See more
  </SeeMoreButton>
</VerticalTimelineElement>
```

#### Required Image Imports
Add the following at the top of `index.js`:
```jsx
import companyImage from "../../images/resume/company-image.jpg";
```

### 5.3. Styling Considerations

The component uses several styled components that can be customized in `ResumeElements.js`:

- `ElementTitle`: For position/institution titles
- `ElementSubtitle`: For basic subtitles
- `ResumeExperienceSubtitle`: For date ranges and locations
- `ElementSubtitle2`: For detailed descriptions
- `ElementSubtitle3`: For company/institution details in popup
- `PopupImagePreview`: For company/institution images in popup

### 5.4. Component Dependencies

Make sure these components are imported:
```jsx
import { FaGraduationCap } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
```

### Best Practices
1. Keep image sizes optimized for web
2. Maintain consistent date formatting
3. Ensure all links open in new tabs using `target="_blank"`
4. Include specific metrics and achievements in work experience descriptions
5. Keep popup content concise and well-structured