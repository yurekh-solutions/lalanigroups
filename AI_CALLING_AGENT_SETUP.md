# Lalani Group AI Calling Agent - Setup Guide

## Overview
This AI voice agent will answer calls to Lalani Group, capture lead information, and schedule site visits automatically.

---

## Step 1: Create Vapi Account (2 minutes)

1. Go to [vapi.ai](https://vapi.ai)
2. Click "Sign Up" and create account
3. Verify your email
4. You get $10 free credit to test

---

## Step 2: Create AI Assistant

1. In Vapi dashboard, click **"Create Assistant"**
2. Select **"Voice Assistant"**
3. Name it: `Lalani Group AI Assistant`
4. In **"System Prompt"** field, paste the content from `VAPI_AI_AGENT_SETUP.json` (the systemPrompt value)

---

## Step 3: Configure Voice Settings

| Setting | Value |
|---------|-------|
| Voice | `shimmer` (friendly female voice) |
| Language | `en-IN` (Indian English) |
| Model | `gpt-4` |

---

## Step 4: Add Functions (Tools)

Add these 3 functions in Vapi:

### Function 1: saveLead
```json
{
  "name": "saveLead",
  "description": "Save lead information to database",
  "parameters": {
    "type": "object",
    "properties": {
      "name": {"type": "string"},
      "phone": {"type": "string"},
      "email": {"type": "string"},
      "interest": {"type": "string"},
      "propertyType": {"type": "string"},
      "location": {"type": "string"},
      "budget": {"type": "string"}
    },
    "required": ["name", "phone"]
  }
}
```

### Function 2: scheduleSiteVisit
```json
{
  "name": "scheduleSiteVisit",
  "description": "Schedule property site visit",
  "parameters": {
    "type": "object",
    "properties": {
      "name": {"type": "string"},
      "phone": {"type": "string"},
      "email": {"type": "string"},
      "project": {"type": "string"},
      "date": {"type": "string"},
      "time": {"type": "string"}
    },
    "required": ["name", "phone", "project", "date", "time"]
  }
}
```

### Function 3: transferToHuman
```json
{
  "name": "transferToHuman",
  "description": "Transfer to sales team",
  "parameters": {
    "type": "object",
    "properties": {
      "reason": {"type": "string"}
    },
    "required": ["reason"]
  }
}
```

---

## Step 5: Connect Phone Number

### Option A: Buy New Number from Vapi
1. Go to "Phone Numbers" in Vapi
2. Click "Buy Number"
3. Select India (+91) or your preferred country
4. Number cost: ~$2-5/month

### Option B: Use Existing Number
1. Go to "Phone Numbers" 
2. Click "Connect Existing"
3. Follow instructions to forward calls to Vapi

---

## Step 6: Set Up Webhook (Important!)

To save leads to your Firebase database:

1. In Vapi Assistant settings, find **"Webhook URL"**
2. Enter: `https://lalanigroups.vercel.app/api/vapi-webhook`
3. Method: `POST`
4. Headers: `Content-Type: application/json`

---

## Step 7: Test the AI Agent

1. Click **"Test"** in Vapi dashboard
2. Call the test number provided
3. Have a conversation as a potential buyer
4. Check if lead appears in your admin dashboard

---

## Step 8: Go Live

1. Click **"Publish"** in Vapi
2. Connect your phone number to the assistant
3. Update your website phone number to the AI number
4. Or forward your existing 022-6728-0000 to the AI number

---

## Pricing

| Component | Cost |
|-----------|------|
| Vapi Platform | $0.05/minute (pay-as-you-go) |
| Phone Number | $2-5/month |
| AI Voice (GPT-4) | Included in per-minute rate |
| **Estimated Monthly** | $50-200 (depending on call volume) |

---

## What the AI Agent Does

✅ Answers calls 24/7  
✅ Greets callers professionally  
✅ Asks qualifying questions  
✅ Captures: Name, Phone, Email, Budget, Property Type  
✅ Schedules site visits  
✅ Saves leads to Firebase (visible in your dashboard)  
✅ Transfers to human when needed  

---

## Sample Call Flow

**Caller:** "Hello, I'm interested in buying a flat"

**AI:** "Hello! Thank you for calling Lalani Group. This is your AI assistant. I'd be happy to help you find your dream home. What type of property are you looking for? We have 1BHK, 2BHK, and 3BHK apartments."

**Caller:** "2BHK"

**AI:** "Great choice! Which location do you prefer? We have projects in Andheri, Malad, Khar, Jogeshwari, Goregaon, and BKC."

**Caller:** "Andheri"

**AI:** "Perfect! We have Lalani Goodwill in Andheri East with 2BHK apartments starting from ₹98 Lakhs. What is your approximate budget range?"

... (continues collecting info) ...

**AI:** "May I have your full name and phone number so our sales team can follow up with you?"

... (saves lead to Firebase) ...

**AI:** "Thank you Mr. Sharma! I've saved your details. Would you like to schedule a site visit this weekend?"

---

## Support

If you need help:
- Vapi Docs: [docs.vapi.ai](https://docs.vapi.ai)
- Email me the Vapi assistant ID once created
- I'll help connect the webhook to your Firebase

---

**Next Step:** Create your Vapi account and share the Assistant ID with me!
