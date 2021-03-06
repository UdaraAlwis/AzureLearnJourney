# AZ-900 Study Notes

AZ-900 Exam guide: https://docs.microsoft.com/en-gb/learn/certifications/exams/az-900

LEARNING PATH 1: Explore Microsoft Azure cloud concepts (AZ-900) 

LEARNING PATH 2: Distinguish Microsoft Azure Core Services (AZ-900)

LEARNING PATH 3: Examine Microsoft Azure security, privacy, compliance, and trust (AZ-900)

LEARNING PATH 4: Review Microsoft Azure pricing, service level agreements, and lifecycles (AZ-900)

---

## LEARNING PATH 1: Explore Microsoft Azure cloud concepts (AZ-900) 

### [Discuss why cloud services](https://docs.microsoft.com/en-gb/learn/modules/discuss-why-cloud-services/)

### Economies of scale

Big corporates purchase in large scale and pass down benefits to their Customers. Reduced costs and with efficiency.

- CapEx – Up front spending on infrastructure such as hardware. (Servers, Storage, Network, Backups, Recovery, Infrastructure, Technical personnel.
- OpEx – Spending for what is used now ex: use compute from Cloud Service providers. (Leasing Software, Resources, Scaling based on demand, Billing only for usage)

### [Distinguish types of cloud models](https://docs.microsoft.com/en-gb/learn/modules/distinguish-types-cloud-models/)

### Cloud hosting models

- Public – Cloud infrastructure hosted by a Provider
- Private – Hosted and owned by company using it for themselves
- Hybrid – Combination of Public and Private cloud

### [Explore types of cloud services](https://docs.microsoft.com/en-gb/learn/modules/explore-types-cloud-services/)

### Shared responsibility model

Level of responsibility for the infrastructure between Cloud provider and Customers.

- Infrastructure as a Service (IaaS)  – using infrastructure servers and virtual machines (VMs), storage, networks, and operating systems from a Cloud provider.
- Platform as a Service (PaaS) – using development and deployment environment from a Cloud provider.
- Software as a Service (SaaS) – using software that is centrally hosted and managed by a Cloud provider.

---

## LEARNING PATH 2: Distinguish Microsoft Azure Core Services (AZ-900)

### [Discuss core Azure architectural components](https://docs.microsoft.com/en-gb/learn/modules/discuss-core-azure-architectural-components/)

### Physical architecture of Azure

Data Centers -> Availability Zones -> Region -> Region Pair -> Geography

Availability Sets – making sure your applications are available during a high impact maintenance event or a hardware failures in a data center. Avoid entire data center unavailability.

- Update Domains – Logical separations within Servers for rolling out updates sequentially
- Fault Domains – Physical separation of Server racks with independent cooling, power, networking

Availability Zones – physically separated data center zones within a Region.

- Each Zone could have one or more data centers.
- Each Region has at least 3 Availability Zones.
- Zonal Services – you pin your Resource to a Zone (VMs)
- Zone Redundant Services – Resource auto replicates itself in Zones (SQL DB)

### [Define core Azure services and products](https://docs.microsoft.com/en-gb/learn/modules/define-core-azure-services-products/)

### Azure Compute Services

- Virtual Machines – Physical emulation of a Computer in Cloud
- Virtual Machine Scale Set – Set of identical VMs, true autoscaled
- App Service – Fully managed platform for hosting Apps
- Azure Functions – Execute code in response to an event, trigger, timer or message

### Container Services

- Maintaining multiple instances of an application in a single host machine
- Orchestrator manages the instances

Orchestration – managing large number of Containers

- Azure Container Instances
- Azure Kubernetes Service

Containers are used to implement Microservices Architecture.

- Breaking your application into small independent pieces
- Such as a website -> UI module, Backend module, Database module

### Azure Networking Services

- Azure Virtual Networks – Secure Networking with Azure Resources, Internet and On-Premise
- Azure Load Balancer – Balance inbound and outbound Network traffic in Azure.
- Azure Virtual Private Network (VPN) Gateway – Encrypted traffic between Azure and On-Premise
- Azure Application Gateway – Web traffic load balancer, also provides a Firewall
- Content Delivery Network – Geo-distributed network for hosting Content

### Data Categories

- Structured Data – Relational data
- Semi-Structured Data – Non-relational, noSQL data
- Unstructured Data – No structure, PDF, Images, Videos Files

### Azure Storage Services

- Disk Storage – for VMs, only access from VM, available in SSDs, HDDs
- Containers (Blobs) – unstructured binary data, documents, images, video, back ups
- Files – network file shares for VMs, access from web with auth token
- Queues – storing messages for asynchronous processing, 64KB size each
- Tables – storing structured, noSQL data, non-relational data

### Azure Database Services

- Azure Cosmos DB – globally distributed noSQL database
- Azure SQL Server – the latest stable version of MS SQL Server
- Azure Database Migration – migrating databases to Azure, no downtime.

### Azure Marketplace

Microsoft Partners, 3rd party vendors publish their customised offerings, solutions and services on top of Azure services.

### [Identify Azure solutions](https://docs.microsoft.com/en-gb/learn/modules/identify-azure-solutions/)

### Internet of Things

- Azure IoT Central – SaaS solution for connect, monitor, and manage IoT devices
- Azure IoT Hub – central message hub for bi-directional communication between IoT devices and your application. Device to Cloud and Cloud to Device.

### Big Data and Analysis

- Azure Synapse Analytics- limitless analytics service (formerly Azure Data Warehouse)
- Azure HDInsight – open source analytics service on top of azure
- Azure Data Lake Analytics – on demand analytics job service based on query execution

### Azure Artificial Intelligence

Forecasting future behaviors, outcomes and trends using Machine Learning…

Azure Cognitive Services – Domain specific pre-trained AI models: Vision, Speech, Language, Knowledge, and Search

### Azure Machine Learning

Easily generating machine leaning models with high efficiency and accuracy…

### Serverless computing

- Azure Functions – execute code based on event, request, trigger or message
- Azure Logic Apps – automate and orchestrate tasks
- Azure Event Grid – build applications with event-based architectures

###  Azure DevOps

Development Operations brings people + process + technology together for automating delivery of software.

- Azure DevOps Services – DevOps tools – pipelines, repositories, kanban boards, automated testing
- Azure Lab Services – quick pre-provisioned environments for testing, test agents, integrate with pipelines

### Azure App Service

build and host web apps, mobile back ends, and RESTful APIs regardless of programming language and framework on Windows and Linux environments. 

Web Apps, Mobile Apps, API Apps, and Logic Apps

### [Differentiate Azure management tools](https://docs.microsoft.com/en-gb/learn/modules/differentiate-azure-management-tools/)

### Azure Management Tools

- Azure Portal – dashboard, high level view, wizards for creating resources
- Azure PowerShell – based on Windows PowerShell, execute Azure specific commands
- Azure Command Line Interface (CLI) – cross platform command line
- Azure Cloud Shell – web browser based command line, needs a Storage Account
- Azure Mobile App – iOS/Android phones/devices, cannot create, but monitor and manage
- Azure REST API – REST API endpoints for create, retrieve, update delete resources

### Azure Advisor

provides recommendations for high-availability, security, performance and cost management for your resources.

---

## LEARNING PATH 3: Examine Microsoft Azure security, privacy, compliance, and trust (AZ-900)

### [Secure network connectivity](https://docs.microsoft.com/en-gb/learn/modules/secure-network-connectivity/)

### Defence in depth strategy

CIA - Confidentiality (restricted access), Integrity (prevent unauthorized changes), Availability (always available for authorized users)

### Defence in depth as Layers –

- Physical Security
- Identity & Access
- Perimeter
- Network
- Compute
- Application
- Data
- Shared security

Cloud Technology -> most of the Security Responsibilities held by the Cloud Provider!

- Still its a shared responsibility with the Customer. 
- Customer can focus on core business activities.
- Some services have certain protection built in.

The shared security model varies in different cloud service structures such as IaaS (ex: VMs), PaaS (ex: Web Apps), and SaaS (ex: Office 365) infrastructures.

### Azure Firewall

Cloud based network security service with high availability, scalability, and Azure Monitor logging. Maintains a static public IP address.

### Azure Application Gateway

Also provides a firewall, contains Web Application Firewall, provides similar features

### Azure DDoS Protection

DDoS attacks overwhelm and exhaust publicly reachable web endpoints over the internet. Identifies attackers and block them without interrupting legitimate users.

Two tiers:

- Basic – built into every Azure service
- Standard – for Azure Virtual Network resources, uses traffic monitoring and machine learning.

### Azure Network Security Groups (NSG)

Filter network traffic between Resources in an Azure Virtual Network, define both inbound and outbound security rules.

### Azure Application Security Groups (ASG)

Filter how network traffic is allowed to move between your applications in Azure. Group similar server applications, ex: web servers, app servers, db servers and define how they’re allowed to communicate.

### Azure Security Solutions for Defence in Depth layers:

Perimeter Layer - Use Azure DDoS Protection and Azure Firewall.

Network Layer – Use NSG, limiting network traffic, only allowed what is required, nothing else.

### Combining Azure Security Services for better solutions

Create multiple layers of security by combining multiple security services in Azure. 

Ex: 
- NSG + Azure Firewall 
- Azure App Gateway + Azure Firewall

### [Examine core identity services](https://docs.microsoft.com/en-gb/learn/modules/examine-core-identity-services/)

### Azure Core Identitity Services

- Authentication – (Check identity with legitimate credentials) Establishes if they are, who they say they are…
- Authorization – (Check the level of access) Establishes what is allowed and what they can do with it…

### Azure Active Directory 

Cloud based Identity and Access Management for internal (intranet apps, organization apps, etc) or external (Office 365, Azure Portal, etc) resources of the company.

- Authentication – identity verification, password reset, multi factor auth (MFA)
- Single Sign-On – Single login, but access multiple applications, simplifying security model
- Application Management – Manage cloud and on-premise apps
- Business to Business – (B2B) managing business partners access
- Business to Consumer – (B2C) managing your customers access
- Device Management – Manage how devices access data

### Single Sign-On

- More identities per user -> more complexity -> more difficult to manage -> and more risky!
- But Single Sign-On: Easy to maintain (ex: password reset, disable access) when authentication is unified.
- One Identity, tied to One User, access to multiple applications granted.
- Azure AD: synchronise with on-premise AD
- Azure AD: threat analysis, and real time identity protection

### Azure Multi-Factor Authentication (MFA)

Limits the impact in case of a credential exposure.

- Something you know – security question
- Something you possess – mobile device, token device
- Something you are – biometric, fingerprint, face, eye

### [Review security tools and features](https://docs.microsoft.com/en-gb/learn/modules/review-security-tools-features/)

### Azure Security Center

Provides threat protection across on-premise and Azure resources.

- Provides recommendations based on configurations, resources and workloads.
- Continuous Monitoring and Security assessments.
- Use machine learning to block malware in VMs
- Analyse and identify potential inbound attacks and prevent them.
- Help with post-attack recovery.
- Just in time access control for ports, only allow legitimate network traffic.

Usage scenarios,

– Post-attack Recovery scenario – detect, assess and diagnose
– Recommendation improvement scenario – using Security Policies and Recommendations for your resources

### Azure Key Vault

Securely storing your application secrets. Store them in single central location, with access control and monitoring. Easy integration with other Azure services.

Features,

- Secret Management (API secrets, keys, tokens, passwords)
- Key Management (encryption keys)
- Certificate Management (SSL/TSL certificates)
- Secrets backed by Hardware Security Devices

### Azure Information Protection (AIP)

For classifying and protecting your Organization Documents and Emails with Labels. These Labels are defined by Administrators. Ex: protecting Word documents with sensitive data.

- Track and control the content.
- Analyse data flows.
- Detect risky behaviors.
- Prevent data leakage or misuse

### Azure Advanced Thread Protection (ATP)

For protecting your Organization’s Network. Identify, detect and investigate threats.

Components:

- ATP portal – monitor activity, and view data received from ATP sensors.
- ATP sensor – installed in domain controllers, and monitors traffic.
- ATP cloud service – Azure ATP cloud service runs in Azure infrastructure and connected to Microsoft’s intelligent security graph.

### [Describe Azure governance methodologies](https://docs.microsoft.com/en-gb/learn/modules/describe-azure-governance-methodologie/)

### Azure Policy

Service that lets your create policies for Azure resources, for maintaining standards and compliance. Runs evaluations on resources, both new and existing ones. Apply for categories such as Storage, Networking, Compute, Security Center, and Monitoring.

- ex: Restrict (SKU) size of virtual machines (VMs) in your environment
- ex: Restrict the deployment Locations of resources

Steps for implementing Azure Policy:

- Create Policy Definition – Creade Definition on what to evaluate and action to take.
- Apply the Definition to Resources – Assign the Definition, to resources or scopes. Once assigned to a Resource Group, it will be inherited by child resources by default. Can also exclude a sub-scope from Policy separately.
- Review the Evaluation result – Runs every 1 Hour. The resource will be marked compliant or non-compliant.

### Policy Initiative

A collection of Policy Definitions, for large scale compliance check.

### Policy Initiative Assignment

Assign initiative definition to a resource scope, ex: Resource Group, Management Group

### Role based Access Control (RBAC)

Grant users only the access they need. 

You -> “Developer” role -> permission given based on that. It uses an “allow” model, only the allowed actions are permitted nothing else.

### Resource Locks

Prevent deleting or modifying of Azure Resources. Prevent accidental actions for critical resources. 

Lock subscription, resource group or even a resource – go to SETTINGS -> and create Lock.

Locks apply even for Authorised Admins, regardless of RBAC permissions. You must first remove the Lock to perform the lock prevented action.

- CanNotDelete – can read and modify but can’t delete.
- ReadOnly – can read but can’t modify or delete.

Parent level locks (Resource Group level) gets inherited to child levels (Resource level).

### Azure Blueprints

Pre-defined Azure resource template that complies with organization’s standards, patterns and requirements. Speed up development, deployment and delivery.

- Create an Azure Blueprint.
- Assign the blueprint.
- Track the blueprint assignments.

Each blueprint deployment is tied to the blueprint package. Improved auditing and tracking. Used in DevOps, for pipelines.

### Azure Subscription governance

Three aspects to consider,

- Billing – can be maintained per subscription. One subscription per department or environment (dev, test, prod).
- Access Control – 1 Azure Subscription <-> 1 AD Tenant, Each subscription managed using RBAC for each environment (dev, test, prod).
- Subscription Limits – Making sure your requirements are met within the Subscription limit.

### [Explore monitoring and reporting](https://docs.microsoft.com/en-gb/learn/modules/explore-monitoring-reporting/)

### Azure Tags

Tag your Resources in Azure based on tag [name – value] pair and retrieve them regardless of Resource Group under the same Subscription.

50 Maximum tags per Resource. For more tags, use JSON string for Tag value.

Tags are not inherited by child resources, but can be enforced by Azure Policy.

### Azure Monitor

Monitoring performance and identifying issues in your Azure and on-premise Resources.

Collects analytical data from: Application, OS, Resource Operations, Subscription, Azure AD

Diagnostic settings:

- Activity Log - when resource created or modified.
- Metrics - performance when a resource is consuming.

Extend the monitoring data by enabling diagnostics and adding agents to the resource.

### Azure Service Health

Provide personalized support when issues in Azure affects you. Helps to prepare for planned maintenance.

Components –

Azure Status – global view of Azure service health.
Service Health – personalised dashboard view for your resources, advisory, alerts, history.
Resource Health – personalised dashboard for health of your resources.

Azure Monitor – monitoring with improved visibility into operations in your Compute resources.

feature Categories:

- Analyse – Application Insights, Azure Monitor for Containers, Azure Monitor for VMs
- Respond – Alerts, Autoscale
- Visualize – Charts, tables visualizing monitoring data includes: Dashboards, Views, and Power BI
- Integrate – with other systems, customized solutions for monitoring

### [Examine privacy, compliance, and data protection standards](https://docs.microsoft.com/en-gb/learn/modules/privacy-compliance-data-protection-standards/)

### Azure Compliance and Requirements

When selecting a Cloud Provider, important things to consider:

- Compliance for sensitive data
- Compliance of the provided Services
- Could it cater for my Custom Compliance requirements?

Microsoft Azure provides the most comprehensive compliance offerings...

### Microsoft Privacy Statement

Explains what kind of personal data Microsoft Uses, How and for What purposes...

### Microsoft Trust Center

Provides information about how microsoft supports security, privacy, compliance and transparency in Azure. Support and resources for legal and compliance community.

### Service Trust Portal

Public site for publishing audit reports and compliance related info about Azure. Access audit reports, compliance guides, and trust documents.

### Compliance Manager 

This is provided with isn Service Trust Portal (STP), dashboard for risk assessment of data protection and compliance status of the Organization, regards to Microsoft and Azure service compliance. Track and record compliance related activities in the Organization. It also provides recommendations to improve data protection and compliance.

### Azure Government Services

Separate instance of Azure for US federal agencies. Physically separated data centers and networks with in US. Screened US personnel.

### Azure China 21Vianet Services

Physically separated cloud services in China. Comply with Chinese regulations, customers sign contracts with 21Vianet when using Azure Services hosted in China.

---

## LEARNING PATH 4: Review Microsoft Azure pricing, service level agreements, and lifecycles (AZ-900)

### [Examine Azure subscriptions](https://docs.microsoft.com/en-gb/learn/modules/examine-azure-subscriptions/)

### Azure Subscription

Provides you authenticated and authorized access to Azure and provision resources.

- A logical unit of Azure services
- Links to an Azure account
- Authorized by an Azure active directory

### Types of Subscription Boundaries:

- Billing boundaries – different models of billing, generate separate billings, organize cost.
- Access Control boundaries – different subscription policies, control access to resources.

Create multiple subscriptions for:

- Different Environments – dev and test, isolate resources, access control.
- Different Organization Structures – control resource use and access.
- Different Billing Purposes – tracking costs for each subscription.
- Subscription Limits – overcome the limitations of each subscription.

### Customizing Billing

Got Multiple Subscriptions? -> You can Separate into, Invoice Sections in your Invoice!

Want to Set up multiple Invoices? -> You can create multiple Billing Profiles (with Own Invoice and Payment method)

### Subscription Offers

- Free account – 12 Months popular services, 30 days free for all
- Pay-as-you-go – Dev/Test 
- Visual Studio Enterprise (Bizpark) or Professional
- Member Offers – by existing membership to other Microsoft products and services

### Management Groups

Manage access, policy and compliance for multiple Subscriptions.

Resource Organization levels of Azure,

- ^ Management Groups
- ^^ Subscriptions
- ^^^ Resource Groups
- ^^^^ Resources

### [Review planning and managing Azure costs](https://docs.microsoft.com/en-gb/learn/modules/review-planning-managing-costs/)

### Purchasing Azure Produts and Services

Three main types of Customers:

- Enterprise – Companies sign a direct Enterprise Contract with Azure, Custom pricing
- Web Direct – direct Customers paying Public Prices for Azure
- Cloud Solution Provider – Microsoft Partner Companies build solutions for Customers

Azure portal -> Billing page – to see your current billing usage and past invoices

Resources are charged only on usage. Pay for what you use model!

### Explore factors affecting costs

Meters are used for tracking costs of Resource usage. Each resource may have multiple meters that tracks usage of different aspects: Compute, IP Address, Data Transfer, Disk Operations, etc.

### Main factors that affect costs

- Resource Type – different resource types have different number of meters
- Services – costs different for Enterprise, Web Direct and CSP Customers
- Location – different locations, and data transfers between them

### Billing Zone

Geographical grouping of Azure Regions for Billing purposes.
 
Bandwidth – data going in and out of Azure. Datacenter Inbound data is mostly free, but Outbound data transfers are priced based on Zones.

ex: Zone 1 – West US, East US, Canada West, West Europe | Zone 2 – Australia Central, Japan West, Central India | Zone 3 – Brazil South

### Azure Pricing Calculator

Helps you estimate cost of Azure Products with configurations such as Region, Tier, Billing Options, Support Options, Offers, Dev/Test Pricing

### Azure Total Cost of Ownership Calculator

Helps you estimate the savings by migrating to Azure Cloud Services against on-premise infrastructure.

Three steps process:

- Define Workloads – current details of on-premise infrastructure, Servers, Databases, Storage, and Networking
- Adjust Assumptions – to improve accuracy, for Assumed Costs such as storage, IT labor, hardware, software, electricity, data center, networking.
- View Report – generate detailed report to compare on-premise vs azure cloud costs

### Way of minimising Costs in Azure

- Perform Cost Analyses – use Azure Pricing and Total Cost of Ownership (TCO) Calculators
- Monitor usage with Azure Advisor – monitor efficiency of resources based on demand
- use Spending Limit – for Credit-based Azure Subscriptions, not avail for Pay-As-You-Go
- use Azure Reservations – reserve Azure products by paying in advance, get discounts
- use Low Cost Locations and Regions – when provisioning Resources (except bandwidth)
- use cost saving Offers – use Azure customer and subscription offers
- use Tags for Resources – to easily monitor costs for resources

### Azure Cost Management

Provides tools for monitoring and optimizing azure costs

Main features of  Azure Cost Management toolset,

- Reporting – generate reports on history and forecast future costs.
- Data enrichment – categorize resources by Tags.
- Budgets – usage budgets, monitoring usage, trends and patterns.
- Alerting – alerts based on costs and budgets.
- Recommendations – get recommendations for optimization.
- Price – free for Azure users.

### [Explore Azure service level agreements (SLAs)](https://docs.microsoft.com/en-gb/learn/modules/explore-azure-service-level-agreements/)

### Service Level Agreements (SLAs)

A formal document that specifies Microsoft’s commitment for adhering to performance and standards. It also specifies what happens if they fail to do so.

Each product has its own SLA, with different ways of expression, such as uptime or connectivity rate.

- Performance targets: 99.9% – 99.99%
- Potential down time – different estimates
- Service credits – Compensation from Microsoft, Ex: reduced Bill, Service Credits

### Composite SLA

Combining multiple SLAs together, in a full application or infrastructure scenario...

Web App (99.99%) x SQL Database (99.95%) = 99.94% SLA (composite)

You can improve by SLA by adding redundant fall back paths per Resource. But you need to handle Complexity and Extra Cost.

### Application SLA

You can define your own SLA for your Customers – set performance targets to suit your requirement.

Considerations,

- Identify workloads – based on requirement, SLAs for each workload.
- Plan for usage Patterns – requirements during critical and non-critical times.
- Establish availability metrics – time to recover (MTTR) and up time between failures (MTBF).
- Establish recovery metrics – accepted unavailable time and data loss time during a disaster.
- Implement Resiliency strategies – application’s ability to recover and continue function
- Build availability req. into design – to enforce your SLA targets.

Understand your App requirement -> select your Azure Resources -> your own SLA will depend on that.

Resiliency -> design for high availability and faster disaster recovery -> Identify points of possible failure and define how to respond to them.

Cost and Complexity vs High Availability -> goes hand in hand.

99.99% SLA performance -> higher than this is very difficult. Need self diagnosis and self healing, also manual intervention.

### [Review Microsoft Azure pricing, service level agreements, and lifecycles (AZ-900)](https://docs.microsoft.com/en-gb/learn/modules/examine-service-lifecycle-azure/)

### Azure Previews

Azure provides preview services, features and functionality for evaluation/testing purposes. Available with their own Terms and Conditions.

- Private Previews – available for certain customers only.
- Public Previews – available for all.

Azure Portal Preview features: https://preview.portal.azure.com/

Improvements on performance, navigation and accessibility features of the Portal.

### Azure Updates page

https://azure.microsoft.com/en-gb/updates/

Gives you latest updates on Azure products and services.

### General Availability (GA)

The finalized release after development and testing of a feature.

---

That's all the notes, good luck with the AZ-900 exam! ^_^ 

-Udara Alwis
