const { NetworkManagementClient } = require("@azure/arm-network");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Creates or updates a network interface.
 *
 * @summary Creates or updates a network interface.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2022-05-01/examples/NetworkInterfaceCreate.json
 */
async function createNetworkInterface() {
  const subscriptionId = "6f3426e6-6635-4b6a-a6dc-cc1c8cf2a496";
  const resourceGroupName = "base_group";
  const networkInterfaceName = "base984_z1";
  const parameters = {
    disableTcpStateTracking: true,
    enableAcceleratedNetworking: true,
    ipConfigurations: [
      {
        name: "ipconfig1",
        publicIPAddress: {
          id: "/subscriptions/6f3426e6-6635-4b6a-a6dc-cc1c8cf2a496/resourceGroups/base_group/providers/Microsoft.Network/publicIPAddresses/base-ip",
        },
        subnet: {
          id: "/subscriptions/6f3426e6-6635-4b6a-a6dc-cc1c8cf2a496/resourceGroups/base_group/providers/Microsoft.Network/virtualNetworks/base_group-vnet/subnets/default",
        },
      },
    ],
    location: "UK South",
  };
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.networkInterfaces.beginCreateOrUpdateAndWait(
    resourceGroupName,
    networkInterfaceName,
    parameters
  );
  console.log(result);
}

createNetworkInterface().catch(console.error);