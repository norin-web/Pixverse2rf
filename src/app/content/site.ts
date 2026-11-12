// Every brand / app fact lives here so names, IDs and emails are never duplicated.
// Facts come from the app's own screens in Figma (Pixverse-v2, Design [MVP])
// and from the owner's Privacy Policy / Terms of Use (effective 2026-11-12).

export const site = {
  brand: "PixVerse",
  email: "koen@veluizen.space",
  year: new Date().getFullYear(),
  operator: "Koen Veluizen",
  address: "C. del Bastero, 13, 28005 Madrid, Spain",
  // brand wording follows section 9 of the Terms / section 12 of the Privacy Policy
  disclaimer:
    "PixVerse is used under a signed Simplified Brand Authorization Agreement with AISPHERE LIMITED, the brand rights holder. Model names belong to their respective owners. Apple, iPhone and App Store are trademarks of Apple Inc.",
};

export const app = {
  id: "6815764831",
  url: "https://apps.apple.com/app/id6815764831",
  // App isn't live yet (iTunes lookup returns 0 results, 2026-11-12) and the documents
  // don't name an iOS version, so the "Requires iOS" lines stay hidden while this is empty.
  minIOS: "",
  category: "AI Video Generator",
};

export const nav = [
  { to: "/app", label: "App" },
  { to: "/about", label: "About" },
  { to: "/support", label: "Support" },
  { to: "/contact", label: "Contact" },
];

export const videoModels = [
  { name: "PixVerse V6", tag: "Popular" },
  { name: "PixVerse V1" },
  { name: "Seedance 2.5", tag: "New" },
  { name: "Seedance 2.0", tag: "New" },
  { name: "MiniMax H3", tag: "New" },
  { name: "Gemini Omni Flash" },
  { name: "Kling O3" },
  { name: "Kling 3.0" },
  { name: "Sora 2.0", tag: "New" },
];

export const imageModels = [
  { name: "Qwen-Image", tag: "Popular" },
  { name: "GPT Image 2" },
  { name: "Nano Banana 2" },
  { name: "Nano Banana 2 Lite", tag: "New" },
  { name: "Seedance 5.0 Pro", tag: "New" },
  { name: "Seedance 5.0 Lite" },
  { name: "Seedream 5.0 Lite" },
  { name: "Kling O3" },
  { name: "Kling 3.0" },
];

export const qualities = ["480P", "720P", "2K", "4K"];
export const frames = ["9:16", "16:9", "4:3", "1:1"];

export const steps = [
  { icon: "app", text: "Install PixVerse and open the Video or Image tab." },
  { icon: "clip", text: "Describe the shot or attach a photo. Pick the model, quality and frame." },
  { icon: "down", text: "Tap Generate, then download the result or share it." },
];

export const features = [
  {
    title: "Type and create",
    text: "Describe the scene in plain words and tap Generate. Your prompt, the progress and the finished clip stay on one screen, so you can ask for a change right under the result.",
    phone: "/images/phone-generating.webp",
    bg: "/images/bg-1.webp",
  },
  {
    title: "Bring a photo to life",
    text: "Attach a picture from Photos or take a shot with the camera, then describe how it should move. The result appears right below, ready to play.",
    phone: "/images/phone-photo.webp",
    bg: "/images/bg-2.webp",
  },
  {
    title: "Top models, your style",
    text: "Choose from nine video models, including PixVerse V6, Seedance 2.5, Kling 3.0 and Sora 2.0. Set quality from 480P to 4K and frame the shot in 9:16, 16:9, 4:3 or 1:1.",
    phone: "/images/phone-models.webp",
    bg: "/images/bg-3.webp",
  },
  {
    title: "Images in the same place",
    text: "Switch to the Image tab to make stills with Qwen-Image, GPT Image 2, Nano Banana 2 and six more models. Same prompt box, same settings, same history.",
    phone: "/images/phone-image.webp",
    bg: "/images/bg-4.webp",
  },
  {
    title: "Save and share",
    text: "Every result opens full screen. Save it to Photos or share it in a tap. Earlier videos and images stay in Generation History on your iPhone.",
    phone: "/images/phone-share.webp",
    bg: "/images/bg-5.webp",
  },
];

export const facts = [
  { n: String(videoModels.length), text: "video models, from PixVerse V6 to Sora 2.0" },
  { n: String(imageModels.length), text: "image models in the Image tab" },
  { n: "4K", text: "top quality, with 480P, 720P and 2K too" },
  { n: String(frames.length), text: "frame formats: 9:16, 16:9, 4:3 and 1:1" },
];

export const reel = [
  { src: "/images/shot-home.webp", label: "Start with a prompt" },
  { src: "/images/phone-models.webp", label: "Select AI Model" },
  { src: "/images/phone-generating.webp", label: "Generating video" },
  { src: "/images/phone-share.webp", label: "Your video" },
  { src: "/images/shot-history.webp", label: "Generation History" },
];

export const specs: [string, string][] = [
  ["Platform", "iPhone"],
  ...(app.minIOS ? [["Requires", `iOS ${app.minIOS} or later`] as [string, string]] : []),
  ["Account", "Not needed, no sign-up"],
  ["Modes", "Text to video, photo to video, text to image"],
  ["Models", `${videoModels.length} for video, ${imageModels.length} for images`],
  ["Quality", qualities.join(", ")],
  ["Frame", frames.join(", ")],
  ["Price", "Free to download, Premium auto-renewable subscription"],
  ["Developer", site.operator],
];

export const principles = [
  { title: "One place for everything", text: "Prompts, photos, progress and results stay on one screen, for video and for images." },
  { title: "Your pick of models", text: "Switch between leading models in a tap and compare what each one does with the same idea." },
  { title: "Kept on your iPhone", text: "No account and no cloud gallery. Your history stays on the device, and you save or share results when you choose." },
];

// Answers follow the app's screens and the Privacy Policy / Terms of Use (2026-11-12).
export const faq = [
  {
    q: "How do I make my first video?",
    a: "Open the Video tab, type what you want to see in the prompt box and tap Generate. The finished clip appears under your prompt, ready to save or share.",
  },
  {
    q: "How do I turn a photo into a video?",
    a: "Tap the paperclip next to the prompt box, choose Upload from Photos or Take a shot, describe how the picture should move and tap Generate.",
  },
  {
    q: "Which AI models can I use?",
    a: `The Video tab has ${videoModels.map((m) => m.name).join(", ")}. The Image tab has ${imageModels.map((m) => m.name).join(", ")}. Pick one in Select AI Model above the prompt box.`,
  },
  {
    q: "How do I change the quality or the frame?",
    a: `Tap the quality chip above the prompt box to choose ${qualities.join(", ")}, or the frame chip to choose ${frames.join(", ")}.`,
  },
  {
    q: "Is PixVerse free?",
    a: "PixVerse is free to download. Premium is an auto-renewable subscription that adds every model and HD quality. The plan, price and any trial are shown in the App Store purchase sheet before you pay.",
  },
  {
    q: "How do I cancel my subscription?",
    a: "Subscriptions are billed through your Apple ID. Open Settings on your iPhone, tap your name, then Subscriptions, choose PixVerse and tap Cancel Subscription. Premium generally stays active until the end of the paid period. Deleting the app doesn’t cancel it.",
  },
  {
    q: "How do I restore a purchase?",
    a: "Open the Premium screen in the app and tap Restore while signed in with the Apple ID you used to buy. Billing and refund requests are handled by Apple.",
  },
  {
    q: "How do I clear my Generation History?",
    a: "Open Generation History from the clock icon at the top of the screen, tap the delete button and confirm Clear history. This can’t be undone. Copies you saved to Photos or shared stay where they are.",
  },
];

faq.push(
  {
    q: "Do I need an account?",
    a: "No. PixVerse has no sign-up or login. Your prompts, results and Generation History are stored on your iPhone, not on a server of ours.",
  },
  {
    q: "What happens to my prompts and photos?",
    a: "When you tap Generate, the prompt and any photo you attached are sent to Google’s AI services to create the result. Nothing is posted publicly. Details are in the Privacy Policy.",
  },
);

const saved = { q: "Where are my videos saved?", a: "Every result is kept in Generation History on your iPhone. Tap Download on a result to save a copy to Photos." };

/** Home shows five questions; Support shows all of them. */
export const homeFaq = [faq[0], faq[4], faq[5], faq[8], saved];
