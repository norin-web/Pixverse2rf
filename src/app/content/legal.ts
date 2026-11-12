// Privacy Policy and Terms of Use from the owner (Koen Veluizen), VERBATIM.
// Source: PixVerse_v2_RF_Privacy_Policy.docx, PixVerse_v2_RF_Terms_of_Use.docx (received 2026-11-12).
// Only markup changes: numbered headings → "## " (the page renders the number),
// "2.1 …" sub-headings → "### ", "•" bullets → "- " lists. Never paraphrase the wording.

export const legalUpdated = "November 12, 2026"; // effective date in both documents

export type LegalDoc = {
  key: "privacy" | "terms";
  title: string;
  kicker: string;
  meta: [string, string][];
  body: string | null;
  glance: [string, string][];
};

// "At a glance" cards are a site summary, not part of the documents.

export const privacy: LegalDoc = {
  key: "privacy",
  title: "Privacy Policy",
  kicker: "Information practices  •  Effective November 12, 2026",
  meta: [["Effective date", "November 12, 2026"], ["Controller", "Koen Veluizen"], ["Address", "C. del Bastero, 13, 28005 Madrid, Spain"], ["Privacy contact", "koen@veluizen.space"]],
  glance: [
    [
        "Stays on your iPhone",
        "No account. Prompts, results and generation history are saved on your device. We run no server of our own that stores them."
    ],
    [
        "Sent only to create",
        "Prompts and the photos you pick go to Google’s AI services to make the result. Apple and Apphud handle subscriptions."
    ],
    [
        "Your choices",
        "Delete history in the app, manage Camera and Photos access in Settings, and write to us for any privacy request."
    ]
  ],
  body: `This Privacy Policy explains how Koen Veluizen (“we,” “us,” or the “Operator”) handles information when you use the mobile application (the “App”), including AI generation, local media history, and subscription functionality.

## Scope and privacy approach

The App allows you to create AI-generated images and videos from prompts and selected images, manage the results on your device, and save or share exports. No App account or registration is required. We do not operate a separate application backend to store your prompts, media, generated files, or generation history.

Although the App keeps its creative workspace locally, some information must be transmitted to external services when you request AI generation or purchase a subscription. The principal service providers are Google for AI processing, Apphud for subscription entitlement and related processing, and Apple for App Store purchases and system services. Their processing should be distinguished from local storage by the App.

## Information involved in the App

### 2.1 Content you choose to provide

When you request image or video creation, the information you choose to submit may include text prompts and selected photographs or other images. Images may contain personal information about you or other people, depending on what is visible in them. The App uses these materials to carry out the creation or editing operation you request.

### 2.2 Information stored locally

The App saves prompts, source materials used by its local workflows, generated images and videos, applicable settings, and previous generation history locally on your device. The Operator does not maintain its own server copy of this creative history. You can delete saved local data using the App’s deletion controls.

### 2.3 Subscription and technical information

The App integrates Apphud to support subscription purchase validation and access management. Apphud may process subscription and transaction history, an automatically generated pseudonymous Apphud user identifier, and technical information associated with the device or connection, such as app version, device type, operating system, approximate region or locale, and IP address, depending on the SDK configuration and applicable policies.

Apphud’s standard SDK setup can generate a pseudonymous identifier even where the App has no registration process. Advertising identifiers are not automatically collected merely because Apphud is installed; whether additional device identifiers are supplied depends on configuration and integrations. We do not use a separate general-purpose analytics SDK, advertising SDK, or crash-reporting platform. Apphud may nonetheless process subscription analytics as part of its service.

### 2.4 Support communications

If you contact us at the support email address, we may receive the email address, message text, and any information you voluntarily provide. We use it to respond to and manage the request. Please avoid sending unnecessary sensitive information in support communications.

## AI processing by Google

For the AI functions you initiate, the App sends prompts and, when selected, images to AI services provided by Google, including Gemini-related image and video generation technology. Google processes these submissions to generate and return requested results. Content processing, technical logs, retention, safety operations, and other handling at Google are governed by the applicable Google service terms, privacy documentation, and service configuration.

We do not claim that information sent to Google is never retained or used by Google. The fact that the App has no own content-storage backend does not prevent an AI provider from maintaining data or logs under its policies. We do not control Google’s internal data retention practices.

We submit your content for AI processing when you request a generation and, where required by applicable privacy and platform rules, obtain consent for that transfer. If you do not want a prompt or image processed by Google, do not submit it for generation. AI generation may not be available without the necessary transmission.

Google privacy information: https://policies.google.com/privacy. Gemini API terms and details: https://ai.google.dev/gemini-api/terms. The applicable terms may depend on the particular Google service and commercial configuration used.

## Camera, Photos, and exports

Camera: with your permission, the App may access the camera so you can capture an image to use in a generation request. Camera access is controlled through the device’s permission settings.

Photo Library (Add Only): the App requests add-only access to save generated results into your Photos library. Selecting an existing photo through an operating-system photo picker does not necessarily require broad library permission. The App does not require full-library access merely to save a result.

When you choose to share or export a file, the destination app or service may receive that file and process it according to its own policies. Copies saved into Photos or shared outside the App are not removed simply by deleting the corresponding local App history.

## Purposes and legal bases

To the extent data is personal data under the GDPR or another applicable law, our purposes and legal grounds may include:

- Providing requested functions (performance of a contract): handling prompts, images, local generation history, and necessary transmissions to deliver AI results and exports you request.
- AI transfer consent, where required: requesting permission for transfers or processing that require consent under applicable privacy or platform rules. Where consent is the legal basis, it may be withdrawn for future processing; previously submitted materials may remain subject to provider retention rules.
- Subscription management (performance of a contract and legitimate interests): verifying subscriptions, enabling paid features, addressing purchase errors, and preventing misuse or fraud through Apple and Apphud.
- Support and compliance (legitimate interests or legal obligations): responding to inquiries, keeping necessary correspondence, meeting legal duties, and protecting the App and its users.

The legal basis applicable to a particular activity may vary according to your location, the type of data, and the circumstances of processing. We do not sell personal information or operate an advertising network through the App.

## Service providers and disclosures

Information is disclosed only as needed for the activities described in this Policy, including:

- Google: to process submitted prompts and selected images and provide AI-generated image or video outputs.
- Apphud: to validate and administer subscriptions and related service events; its privacy information is available at https://legal.apphud.com/privacy.
- Apple: to process App Store transactions, provide operating-system permissions and purchase infrastructure, and handle files if you use Apple device features to save or share them.
- Legal or security requirements: where disclosure is required by applicable law or reasonably necessary to protect rights, safety, and service integrity.

We do not provide a public user gallery, user-to-user chat, or public posting feature. AI requests are not made publicly visible to other App users through the App.

## Storage, retention, and deletion

Local App data. Creative content and generation history stored by the App remain on your device until you delete them, remove the App, or device and backup processes affect them. You can delete local saved results and history through available App functionality. Exported Photos files and copies shared to other services must be managed separately.

Provider data. Google may retain submitted content or logs according to its applicable terms and configuration. Apphud and Apple retain purchase and related technical records in accordance with their own requirements and policies. Deleting local App history does not itself instruct these services to erase records they separately maintain.

Support correspondence. When you contact us, we retain communications only as reasonably needed to address the request, manage relevant records, and comply with legal obligations. We do not establish a fixed retention period here where it depends on the circumstances and applicable law.

## International processing

Google, Apphud, Apple, or their subprocessors may process information in countries outside Spain or the European Economic Area. Where GDPR transfer rules apply, international processing must be supported by an appropriate legal transfer mechanism or other lawful basis. The relevant provider documentation describes its processing locations and applicable safeguards.

## Your choices and privacy rights

You can choose which prompts and images to submit, decline camera permission, use device settings to manage permissions, delete locally saved generations and history, and manage or cancel subscriptions in your Apple Account settings. No App account exists to delete.

Depending on applicable law and the nature of the processing, you may have rights to request access, correction, deletion, restriction, portability, or objection, and to withdraw consent where consent is the lawful basis. To exercise rights in relation to processing controlled by Koen Veluizen, contact koen@veluizen.space. We may need reasonable information to verify and fulfill a request and may be subject to legal exceptions.

Requests concerning information controlled independently by Google, Apple, or Apphud may also need to be directed to those providers. If you are in the EEA, you may lodge a complaint with your supervisory authority; in Spain, the competent authority is the Agencia Española de Protección de Datos (AEPD) (https://www.aepd.es).

## Security

We take reasonable measures appropriate to the nature of the App and rely on device operating-system protections for locally stored data. Communications with external services necessarily involve their own infrastructure and security procedures. No method of electronic transmission or storage is completely secure, and we cannot guarantee absolute security.

## Children and age-related requirements

The App is not intended for children. AI services integrated into the App may impose age restrictions that differ from the App Store age rating. Users must satisfy any applicable minimum-age requirements before using the relevant functions. If you believe a child’s personal information has been processed contrary to applicable requirements, contact us at the address below.

## Brand authorization and trademark information

The PixVerse brand is used under a signed authorization agreement. Koen Veluizen uses the PixVerse name and related branding for the App pursuant to a signed Simplified Brand Authorization Agreement with AISPHERE LIMITED dated September 30, 2026. AISPHERE LIMITED is identified in that agreement as the brand rights holder.

This contractual brand authorization concerns rights to use names and branding. It does not replace the privacy disclosures in this Policy, transfer responsibility for the App’s privacy practices to AISPHERE LIMITED, or itself establish that AISPHERE LIMITED receives prompts, images, or subscription data. The App’s identified AI-processing provider is Google, and its subscription service provider is Apphud.

## Changes to this Policy

We may update this Privacy Policy to reflect changes to the App, legal requirements, or the services used. We will change the effective date when the Policy is revised and provide additional notice or obtain consent where required by law.

## Contact

For privacy questions, rights requests, or concerns about the handling of information in the App, contact Koen Veluizen, koen@veluizen.space, C. del Bastero, 13, 28005 Madrid, Spain.`,
};

export const terms: LegalDoc = {
  key: "terms",
  title: "Terms of Use",
  kicker: "Application terms  •  Effective November 12, 2026",
  meta: [["Effective date", "November 12, 2026"], ["Operator", "Koen Veluizen"], ["Address", "C. del Bastero, 13, 28005 Madrid, Spain"], ["Contact", "koen@veluizen.space"]],
  glance: [
    [
        "Acceptable use",
        "Upload only what you have the right to use. No illegal, abusive or deceptive content, and no impersonation of real people."
    ],
    [
        "Subscriptions",
        "Auto-renewable and billed by Apple. Cancel in your Apple Account settings, and access lasts until the end of the paid period."
    ],
    [
        "Your content",
        "You keep the rights to what you upload and may use the results. Check third-party rights before publishing them."
    ]
  ],
  body: `These Terms of Use (the “Terms”) govern access to and use of the mobile application operated by Koen Veluizen (the “App”). Please read them before using the App, including its AI image and video creation features.

## Acceptance and eligibility

By downloading, accessing, or using the App, you agree to these Terms and acknowledge the accompanying Privacy Policy. If you do not agree, do not use the App. Where use of a feature requires consent or acceptance of additional terms, those requirements apply to that feature.

You must be legally eligible to use the App under the laws applicable to you and comply with age-related restrictions imposed by services integrated into the App. Certain AI services may impose a higher minimum age than the App Store age classification. A parent or legal guardian is responsible for uses that applicable law permits them to authorize.

## What the App provides

The App offers tools to generate AI-assisted videos from text prompts or selected images, create or edit images, choose among available generation models, adjust output settings and formats, save results to the device, share exported files, and review a local history of previous generations.

Available models, output quality (including up to 4K where supported), formats, processing time, usage limits, and feature availability may differ by device, subscription plan, technical capacity, geographic region, or updates. Features may change as the service develops.

The App does not provide a social network, public gallery, user-to-user messaging, or an AI chat feature. No registration or sign-in is required to access its available functionality.

## AI processing and external services

To provide a requested generation, the App transmits the text prompt and, when you choose to include them, selected images to AI services provided by Google, including Gemini-related image-generation and video-generation services. Those materials are processed by Google to produce the requested output and may be handled under Google’s applicable terms and privacy practices.

The App itself does not operate a separate server for storing your prompts, uploaded media, generated content, or generation history. This does not mean that Google or other infrastructure involved in delivering the AI service never processes, logs, or retains information. Any provider-side retention and further handling are subject to its applicable policies and service arrangements.

Do not submit material that you are not entitled to use, or sensitive information that you do not wish to disclose to an AI provider. If an in-app consent or disclosure request is presented before AI processing, you may decline; declining may prevent the requested generation.

## Your inputs and permitted processing

You retain any rights you hold in prompts, photographs, and other material you supply (“User Materials”). You represent that you have the rights, permissions, and lawful basis necessary to upload and process your User Materials, including any images depicting other people.

You grant the App operator and the AI service providers a limited, non-exclusive authorization to transmit, host temporarily where technically necessary, process, transform, and return your User Materials solely as reasonably required to deliver the functions you request, operate the service, prevent misuse, and comply with applicable law and provider terms. This authorization does not transfer ownership of your original content to the operator.

## AI-generated results and intellectual property

Subject to applicable law, third-party rights, and AI provider terms, you may save, share, and use the outputs produced for you. The App does not guarantee that any output is original, unique, copyrightable, free of third-party rights, accurate, or suitable for a particular commercial or legal use.

AI systems may produce similar or identical results for different users. Before publishing, distributing, or commercially exploiting a result, you are responsible for checking applicable intellectual-property, publicity, privacy, and other rights. We do not provide legal clearance or professional advice concerning generated content.

## Acceptable use

You agree not to use the App or its outputs to violate any applicable law, third-party rights, or the usage rules of an integrated AI provider. In particular, you must not:

- Upload material you do not have permission to use or misuse another person’s image, likeness, personal information, or intellectual property.
- Create or disseminate content involving child sexual exploitation, non-consensual intimate imagery, unlawful sexual content, credible threats, unlawful harassment, or other illegal or abusive material.
- Create deceptive impersonations, fraudulent material, or misleading synthetic media in violation of law, or use the App to facilitate scams or identity abuse.
- Interfere with the App’s security or operations, bypass usage restrictions, automate abusive requests, or attempt unauthorized access to services or systems.

The App is not intended to produce pornographic content. We may restrict or disable functionality as reasonably necessary to address prohibited use, provider restrictions, security concerns, or legal obligations. Such restrictions do not imply that every generated result has been reviewed in advance.

## Subscriptions, billing, and cancellation

The App currently offers paid access through auto-renewable subscriptions purchased using Apple’s In-App Purchase system. Subscription plans, price, currency, billing period, any introductory offer or trial, and included features are displayed before purchase in the App Store purchase flow. There are currently no standalone one-time purchases offered through the App.

Payment is charged to your Apple Account when the purchase is confirmed or at the time stated in the applicable offer. Unless canceled, subscriptions renew automatically for the stated period at the applicable renewal price. You can manage or cancel a subscription in your Apple Account subscription settings. Canceling normally stops future renewals; access to paid features generally continues until the end of the paid period, subject to applicable rules and the displayed offer terms.

Purchases and billing are administered by Apple. Subscription entitlement, purchase verification, and related subscription information are supported by Apphud. Refund requests are subject to Apple’s procedures and applicable consumer laws; where applicable, submit requests through Apple. Any statutory consumer rights remain unaffected.

Features and generation allowances associated with subscriptions are those identified in the App at the relevant time. If we introduce different purchase options in a later release, they will be described in the applicable purchase flow and updated terms as required.

## Local storage, deletion, and exports

The App stores prompts, selected materials, available generated images and videos, and generation history locally on the device. You can delete locally saved generations and history using the App’s available deletion functionality. Removing App data does not necessarily erase copies that you exported to Photos, shared with others, or backed up through device services.

Deleting local content does not automatically delete information already transmitted to Google for processing or subscription-related records retained by Apple or Apphud. Those providers process information under their own retention rules. Further details are set out in the Privacy Policy.

## Brand authorization and trademarks

PixVerse is a brand used under authorization. Koen Veluizen uses the PixVerse name and relevant brand identifiers in connection with the App pursuant to a signed Simplified Brand Authorization Agreement dated September 30, 2026, with AISPHERE LIMITED, the identified brand rights holder. This is a distinct contractual authorization for brand use; it is not a transfer of trademark ownership to the App operator or to users.

All trademark rights remain with their respective owners. Users receive no independent right to copy, register, sublicense, or otherwise exploit the PixVerse name, marks, or related branding. Brand authorization should not be understood as a representation that AISPHERE LIMITED operates the App’s AI processing; the AI services described in these Terms are provided by Google.

## Third-party platforms and services

Use of the App may involve Apple services for downloads, purchases, device permissions, and exported media, Google AI services for generation, and Apphud for subscription management. Their separate rules and privacy policies may apply when you use those services. Links to relevant provider policies appear in the Privacy Policy.

## Availability, changes, and maintenance

We aim to make the App available but do not promise uninterrupted or error-free operation. Generation may be unavailable, delayed, limited, or unsuccessful due to connectivity, provider availability, safety controls, device capability, maintenance, or other circumstances. We may modify features, supported models, or technical requirements for legitimate operational, security, or legal reasons.

## Disclaimers and limitation of liability

To the extent permitted by applicable law, the App and generated results are provided on an “as available” basis without a guarantee of any specific result, availability, accuracy, fitness for purpose, or non-infringement. You are responsible for reviewing outputs before relying on or distributing them.

Nothing in these Terms excludes or limits liability that cannot lawfully be excluded, including mandatory consumer protections. Subject to those protections, we are not responsible for losses caused by unauthorized use, inaccurate AI outputs, failures of third-party services, or events outside our reasonable control, except to the extent liability is required by applicable law.

## Ending use and suspension

You may stop using the App at any time and delete locally saved content. Uninstalling the App does not automatically cancel an active Apple subscription; you must cancel it through Apple’s subscription settings. We may restrict access where reasonably necessary to respond to serious violations, security risks, provider requirements, or legal obligations.

## Governing law and consumer rights

These Terms are governed by the laws of Spain, subject to mandatory consumer-protection provisions that apply in your country of habitual residence. Where a dispute cannot be resolved informally, jurisdiction and remedies are determined by applicable law; nothing here deprives a consumer of rights or courts made available by mandatory law.

## Changes and contact

We may revise these Terms to reflect changes in the App, applicable requirements, or services used. The current version will identify its effective date. When legally required, material changes will be communicated through an appropriate channel and any required consent will be requested.

For questions about these Terms, the App, or your subscription-related support request, contact Koen Veluizen at koen@veluizen.space or by post at C. del Bastero, 13, 28005 Madrid, Spain.`,
};
