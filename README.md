# AzureLearnJourney
Azure Learn-ing Journey: https://docs.microsoft.com/en-gb/learn/certifications/exams/az-900?wt.mc_id=learningredirect_certs-web-wwl

Explore Microsoft Azure cloud concepts (AZ-900) 

Distinguish Microsoft Azure Core Services (AZ-900)

Examine Microsoft Azure security, privacy, compliance, and trust (AZ-900)

Review Microsoft Azure pricing, service level agreements, and lifecycles (AZ-900)

---

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

* Update Domains – Logical separations within Servers for rolling out updates sequentially
* Fault Domains – Physical separation of Server racks with independent cooling, power, networking

Availability Zones – physically separated data center zones within a Region.

* Each Zone could have one or more data centers.
* Each Region has at least 3 Availability Zones.
* Zonal Services – you pin your Resource to a Zone (VMs)
* Zone Redundant Services – Resource auto replicates itself in Zones (SQL DB)
