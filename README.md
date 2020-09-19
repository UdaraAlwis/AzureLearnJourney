# AzureLearnJourney

Azure Learn-ing Journey: https://docs.microsoft.com/en-gb/learn/certifications/exams/az-900

LEARNING PATH 1: Explore Microsoft Azure cloud concepts (AZ-900) 

LEARNING PATH 2: Distinguish Microsoft Azure Core Services (AZ-900)

LEARNING PATH 3: Examine Microsoft Azure security, privacy, compliance, and trust (AZ-900)

LEARNING PATH 4: Review Microsoft Azure pricing, service level agreements, and lifecycles (AZ-900)

---

## LEARNING PATH 1: Explore Microsoft Azure cloud concepts (AZ-900) 

### Economies of scale

Big corporates purchase in large scale and pass down benefits to their Customers. Reduced costs and with efficiency.

- CapEx – Up front spending on infrastructure such as hardware. (Servers, Storage, Network, Backups, Recovery, Infrastructure, Technical personnel.
- OpEx – Spending for what is used now ex: use compute from Cloud Service providers. (Leasing Software, Resources, Scaling based on demand, Billing only for usage)

### Cloud hosting models

- Public – Cloud infrastructure hosted by a Provider
- Private – Hosted and owned by company using it for themselves
- Hybrid – Combination of Public and Private cloud

### Shared responsibility model
level of responsibility for the infrastructure between Cloud provider and Customers.

- Infrastructure as a Service (IaaS)  – using infrastructure servers and virtual machines (VMs), storage, networks, and operating systems from a Cloud provider.
- Platform as a Service (PaaS) – using development and deployment environment from a Cloud provider.
- Software as a Service (SaaS) – using software that is centrally hosted and managed by a Cloud provider.

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

---

## LEARNING PATH 2: Distinguish Microsoft Azure Core Services (AZ-900)

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



