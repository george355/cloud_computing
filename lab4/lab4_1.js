const { NetworkManagementClient } = require("@azure/arm-network");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Creates or updates a static or dynamic public IP address.
 *
 * @summary Creates or updates a static or dynamic public IP address.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2022-05-01/examples/PublicIpAddressCreateCustomizedValues.json
 */
async function createPublicIPAddressAllocationMethod() {
  const subscriptionId = "6f3426e6-6635-4b6a-a6dc-cc1c8cf2a496";
  const resourceGroupName = "base_group";
  const publicIpAddressName = "20.0.5.222";
  const parameters = {
    idleTimeoutInMinutes: 10,
    location: "UK South",
    publicIPAddressVersion: "IPv4",
    publicIPAllocationMethod: "Static",
    sku: { name: "Standard", tier: "Global" },
  };
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.publicIPAddresses.beginCreateOrUpdateAndWait(
    resourceGroupName,
    publicIpAddressName,
    parameters
  );
  console.log(result);
}

createPublicIPAddressAllocationMethod().catch(console.error);