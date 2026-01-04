# 🎯 CUSTOMIZATION GUIDE - IMPORTANT!

## ⚠️ CRITICAL: Information to Update

This portfolio is now set up with placeholder data. You MUST update the following with your actual information:

### 1. Google Drive Resume Link (MOST IMPORTANT!)
**File:** `app/components/Contact.tsx`
**Line:** Look for `const RESUME_GDRIVE_LINK = 'YOUR_GOOGLE_DRIVE_LINK_HERE';`

**Steps to get your Google Drive link:**
1. Upload your resume PDF to Google Drive
2. Right-click the file → Share → Change to "Anyone with the link"
3. Copy the link (format: `https://drive.google.com/file/d/FILE_ID/view?usp=sharing`)
4. Paste it in the Contact.tsx file

**Example:**
```typescript
const RESUME_GDRIVE_LINK = 'https://drive.google.com/file/d/1a2b3c4d5e6f7g8h9i0j/view?usp=sharing';
```

---

### 2. Personal Contact Information
**File:** `app/components/Contact.tsx`

Update ALL of these with your real information:

#### Email
```tsx
href="mailto:devansh.example@gmail.com"  // Change to YOUR email
<div className="font-semibold">devansh.example@gmail.com</div>  // Change here too
```

#### Phone Number
```tsx
href="tel:+919876543210"  // Change to YOUR phone with country code
<div className="font-semibold">+91 98765 43210</div>  // Display format
```

#### LinkedIn
```tsx
href="https://linkedin.com/in/devansh"  // Change to YOUR LinkedIn username
<div className="font-semibold">/in/devansh</div>  // Change here too
```

#### GitHub
```tsx
href="https://github.com/devansh"  // Change to YOUR GitHub username
<div className="font-semibold">/devansh</div>  // Change here too
```

#### Twitter/X
```tsx
href="https://twitter.com/devansh"  // Change to YOUR Twitter handle
<div className="font-semibold">@devansh</div>  // Change here too
```

#### Codeforces
```tsx
href="https://codeforces.com/profile/devansh"  // YOUR Codeforces handle
<div className="font-semibold">/devansh</div>  // Change here too
```

#### LeetCode
```tsx
href="https://leetcode.com/devansh"  // YOUR LeetCode username
<div className="font-semibold">/devansh</div>  // Change here too
```

---

### 3. Competitive Programming Profiles
**File:** `app/components/Achievements.tsx`
**Line:** Around line 115-125

Update these with YOUR actual ratings and handles:

```tsx
{ platform: 'Codeforces', rating: '1850+', color: 'blue', handle: '@devansh' },
{ platform: 'LeetCode', rating: '2100+', color: 'yellow', handle: '@devansh' },
{ platform: 'CodeChef', rating: '5★', color: 'purple', handle: '@devansh' },
{ platform: 'AtCoder', rating: '1600+', color: 'green', handle: '@devansh' }
```

**Change to YOUR ratings and handles!**

---

### 4. Achievement Stats
**File:** `app/components/Achievements.tsx`

Update the stats in each achievement object:

#### ICPC Achievement
```tsx
stats: [
  { label: "Teams Participated", value: "2000+" },  // Actual number
  { label: "Problems Solved", value: "8/11" },      // Your problems solved
  { label: "Time Taken", value: "4h 32m" }          // Your actual time
]
```

#### Competitive Programming Stats
```tsx
stats: [
  { label: "Total Problems", value: "5000+" },      // Your actual count
  { label: "Contest Rating", value: "1850+" },      // Your highest rating
  { label: "Global Rank", value: "Top 5%" }         // Your rank %
]
```

---

### 5. Projects
**File:** `app/components/Projects.tsx`

Replace the example projects with YOUR actual projects from your resume:

```tsx
const projects: Project[] = [
  {
    id: 1,
    title: "YOUR PROJECT NAME",
    problem: "What problem did it solve?",
    solution: "How did you solve it?",
    impact: "What was the result/impact?",
    tech: ["Tech1", "Tech2", "Tech3"],  // Technologies you used
    category: "Category Name",
    link: "https://github.com/yourusername/project" // Real link
  },
  // Add more projects...
];
```

---

### 6. Work Experience
**File:** `app/components/Experience.tsx`

Replace with YOUR actual work experience:

```tsx
const experiences: Experience[] = [
  {
    id: 1,
    title: "YOUR JOB TITLE",
    company: "COMPANY NAME",
    period: "START DATE - END DATE",
    description: "Brief description of your role",
    achievements: [
      "YOUR ACHIEVEMENT 1",
      "YOUR ACHIEVEMENT 2",
      "YOUR ACHIEVEMENT 3"
    ],
    tech: ["Tech1", "Tech2", "Tech3"]
  },
  // Add more experiences...
];
```

---

### 7. Skills
**File:** `app/components/Skills.tsx`

Update with YOUR actual skills and proficiency levels:

```tsx
const skills: Skill[] = [
  { name: 'YOUR SKILL', level: 85, category: 'Category', icon: '🔷' },
  // Add all your skills...
];
```

**Categories to use:**
- Languages
- Frontend
- Backend
- AI/ML
- DevOps
- Cloud
- Tools
- Database

---

### 8. Other Achievements
**File:** `app/components/Achievements.tsx`

If you have OTHER achievements besides ICPC:
- Hackathon wins
- Certifications
- Publications
- Open source contributions

Add them to the `achievements` array.

---

## 🎨 Optional Customizations

### Change Color Scheme
Current: Purple/Pink theme

To change, replace these colors across all components:
- `purple-600` → your color
- `purple-400` → your color
- `pink-600` → your color

### Add More Sections
You can add sections like:
- Certifications
- Publications
- Blog posts
- Testimonials

Just create a new component in `app/components/` and add it to `page.tsx`

---

## 🚀 Quick Start Checklist

- [ ] Update Google Drive resume link
- [ ] Update all contact information (email, phone, socials)
- [ ] Update competitive programming ratings and handles
- [ ] Update ICPC stats with your actual numbers
- [ ] Replace example projects with your real projects
- [ ] Update work experience with your actual jobs
- [ ] Update skills with your proficiency levels
- [ ] Update all achievement stats
- [ ] Test all links to make sure they work
- [ ] Test resume view and download buttons

---

## 📝 Testing

After updating:
1. Click every social media link - does it go to YOUR profile?
2. Click "View Resume" - does it open YOUR resume?
3. Click "Download Resume" - does it download YOUR resume?
4. Check phone number - does it open YOUR number in phone app?
5. Check email - does it open email to YOUR address?

---

## 🆘 Need Help?

If you're stuck:
1. Search for the placeholder text (like "devansh" or "example")
2. Replace ALL instances with your actual information
3. Save the file
4. Refresh your browser

The dev server is running at: http://localhost:3000

---

## 🎉 You're Ready!

Once you've updated all the information above, your portfolio will be a powerful pitch showcasing:
- Your ICPC AIR 19 achievement
- Your competitive programming excellence
- Your problem-solving skills with mathematical theme
- All your projects, skills, and experience
- Direct contact options and resume download

Good luck! 🚀
