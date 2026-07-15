export const integrations = [
  {
    title: "Zapier",
    slug: "zapier",
    iconName: "Zap",
    color: "text-orange-500",
    description: "Automate your WhatsApp CRM workflows by connecting Chatmagnet AI with 5000+ apps via Zapier.",
    content: `
      <h2>Step 1: Initial Configuration Setup</h2>
      <p>Begin by logging into your Chatmagnet AI account and navigating to the Integrations dashboard. Locate the Zapier integration option and click "Connect." You'll be prompted to authorize the connection by copying your unique Chatmagnet AI API key. In Zapier, create a new connection and paste this API key. Ensure both accounts are active for a smooth setup.</p>
      
      <h2>Step 2: Data Mapping and Synchronization</h2>
      <p>Once the connection is established, define the data fields to be shared between Chatmagnet AI and your favorite apps. Use Zapier's intuitive mapping tool to align fields such as customer phone numbers, WhatsApp opt-in status, or lead source. This ensures seamless synchronization of information.</p>
      
      <h2>Step 3: Workflow Automation Configuration</h2>
      <p>Leverage Zapier to define workflows that trigger actions in Chatmagnet AI. For example, a new lead in Facebook Ads can automatically trigger a welcome WhatsApp message in Chatmagnet AI. Set up conditions to ensure alignment between systems, streamlining collaboration and reducing manual effort.</p>
      
      <h2>Step 4: Integration Testing and Deployment</h2>
      <p>Before going live, perform a comprehensive test of the integration. Use a test contact to validate that messages are being routed and sent correctly. Once verified, turn on your Zap and enjoy automated WhatsApp sales pipelines.</p>
    `
  },
  {
    title: "HubSpot",
    slug: "hubspot",
    iconName: "Share2",
    color: "text-orange-600",
    description: "Sync your HubSpot contacts and keep track of every WhatsApp conversation directly in your CRM.",
    content: `
      <h2>Step 1: Initial Configuration Setup</h2>
      <p>Begin by logging into your Chatmagnet AI account and navigating to the Integrations dashboard. Click on HubSpot and authorize the OAuth connection. You will be redirected to HubSpot to grant Chatmagnet AI permissions to read and write contacts and timeline events.</p>
      
      <h2>Step 2: Data Mapping and Synchronization</h2>
      <p>Define the synchronization rules between Chatmagnet AI and HubSpot. Map the HubSpot "Mobile Phone Number" field to the Chatmagnet AI WhatsApp number field. Choose whether to enable two-way sync so that any new leads generated on WhatsApp are automatically pushed to HubSpot.</p>
      
      <h2>Step 3: Workflow Automation Configuration</h2>
      <p>Configure timeline events. Whenever your sales team has a conversation with a lead on WhatsApp via Chatmagnet AI, you can automatically log the chat transcript into the HubSpot contact's activity feed. This keeps your entire sales team aligned without manual data entry.</p>
      
      <h2>Step 4: Integration Testing and Deployment</h2>
      <p>Test the sync by updating a contact in HubSpot and verifying the change in Chatmagnet AI. Then, send a test WhatsApp message and ensure it appears on the HubSpot timeline. Once successful, deploy the integration for your whole team.</p>
    `
  },
  {
    title: "Shopify",
    slug: "shopify",
    iconName: "ShoppingBag",
    color: "text-green-500",
    description: "Send abandoned cart alerts, order confirmations, and shipping updates on WhatsApp automatically.",
    content: `
      <h2>Step 1: Initial Configuration Setup</h2>
      <p>Navigate to the Shopify App Store or use the Custom App feature in your Shopify admin panel. Generate an Admin API access token. In Chatmagnet AI's integration settings, paste this token along with your Shopify store URL to establish a secure connection.</p>
      
      <h2>Step 2: Data Mapping and Synchronization</h2>
      <p>Map your Shopify order statuses to Chatmagnet AI message templates. For instance, link the "Order Fulfilled" status in Shopify to a pre-approved WhatsApp template in Chatmagnet AI that includes the tracking URL and customer details.</p>
      
      <h2>Step 3: Workflow Automation Configuration</h2>
      <p>Set up the Abandoned Cart recovery flow. Configure Chatmagnet AI to wait 30 minutes after a cart is abandoned, and then automatically trigger a WhatsApp message with a discount code to the customer. This significantly boosts conversion rates compared to email.</p>
      
      <h2>Step 4: Integration Testing and Deployment</h2>
      <p>Create a test order on your Shopify store. Verify that the order confirmation WhatsApp message is triggered and received instantly. Test the abandoned cart flow using a dummy checkout. Once everything works, launch the integration.</p>
    `
  },
  {
    title: "WooCommerce",
    slug: "woocommerce",
    iconName: "ShoppingCart",
    color: "text-purple-600",
    description: "Automate your WordPress E-commerce notifications and customer support directly on WhatsApp.",
    content: `
      <h2>Step 1: Initial Configuration Setup</h2>
      <p>Install the Chatmagnet AI integration plugin from the WordPress repository. Once activated, go to the WooCommerce settings panel, find the Chatmagnet AI tab, and enter your Chatmagnet AI API credentials. Ensure your WordPress site has a valid SSL certificate for secure webhooks.</p>
      
      <h2>Step 2: Data Mapping and Synchronization</h2>
      <p>Select which WooCommerce events should trigger WhatsApp messages. You can map events like "New Order", "Processing", "Completed", and "Refunded" to specific Chatmagnet AI visual flow builder paths or direct message templates.</p>
      
      <h2>Step 3: Workflow Automation Configuration</h2>
      <p>Customize the message variables. Use shortcodes like [order_id], [billing_first_name], and [order_total] to personalize the WhatsApp messages sent via Chatmagnet AI. You can also route replies directly to your shared team inbox for fast customer support.</p>
      
      <h2>Step 4: Integration Testing and Deployment</h2>
      <p>Place a test order using a staging environment or a 100% discount coupon. Check if the WhatsApp notification arrives with the correct personalized variables. Once validated, enable the plugin for all live customer transactions.</p>
    `
  },
  {
    title: "Razorpay",
    slug: "razorpay",
    iconName: "CreditCard",
    color: "text-blue-500",
    description: "Instantly generate and send Razorpay payment links to your customers via WhatsApp chat.",
    content: `
      <h2>Step 1: Initial Configuration Setup</h2>
      <p>Log into your Razorpay Dashboard and navigate to Settings > API Keys. Generate a new Key ID and Key Secret. Go to the Chatmagnet AI Integrations page, select Razorpay, and input these credentials to authorize Chatmagnet AI to generate payment links on your behalf.</p>
      
      <h2>Step 2: Data Mapping and Synchronization</h2>
      <p>No complex mapping is required for payments, but you must define the default currency and payment link expiry duration. You can also map Razorpay's "Payment Successful" webhook back to Chatmagnet AI to automatically tag a lead as "Paid".</p>
      
      <h2>Step 3: Workflow Automation Configuration</h2>
      <p>Integrate Razorpay directly into the Chatmagnet AI Visual Flow Builder. When a lead selects "Buy Now" in your WhatsApp chatbot, the bot can dynamically generate a Razorpay payment link for the specific product amount and send it in the chat instantly.</p>
      
      <h2>Step 4: Integration Testing and Deployment</h2>
      <p>Generate a test payment link using Razorpay's Test Mode. Complete the transaction using test card details and ensure Chatmagnet AI receives the success webhook and sends the automated "Thank You" message. Switch to Live Mode when ready.</p>
    `
  },
  {
    title: "Salesforce",
    slug: "salesforce",
    iconName: "Cloud",
    color: "text-sky-500",
    description: "Enterprise two-way sync for leads, contacts, and WhatsApp communication history.",
    content: `
      <h2>Step 1: Initial Configuration Setup</h2>
      <p>In Chatmagnet AI, select the Salesforce integration and log in using your Salesforce Administrator credentials. Chatmagnet AI uses a connected app via OAuth 2.0. Approve the required permissions for Chatmagnet AI to interact with your Salesforce objects and API.</p>
      
      <h2>Step 2: Data Mapping and Synchronization</h2>
      <p>Map standard and custom Salesforce objects to Chatmagnet AI. Link the Salesforce "Lead" and "Contact" objects to Chatmagnet AI's address book. Ensure that the mobile phone number fields are formatted with country codes so the WhatsApp API can process them correctly.</p>
      
      <h2>Step 3: Workflow Automation Configuration</h2>
      <p>Set up bidirectional syncing. When a sales rep sends a WhatsApp message via Chatmagnet AI, it should automatically create a "Task" or "Activity" record under the corresponding Salesforce Lead. Conversely, updating a Lead Status in Salesforce can trigger an automated WhatsApp follow-up via Chatmagnet AI.</p>
      
      <h2>Step 4: Integration Testing and Deployment</h2>
      <p>Create a test Lead in Salesforce and verify it appears in Chatmagnet AI. Initiate a WhatsApp chat and confirm the transcript syncs back to the Salesforce Activity History. Due to enterprise complexities, we recommend testing in a Salesforce Sandbox before deploying to production.</p>
    `
  }
];
