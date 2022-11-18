const { ComputeManagementClient } = require("@azure/arm-compute");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to The operation to create or update a virtual machine. Please note some properties can be set only during virtual machine creation.
 *
 * @summary The operation to create or update a virtual machine. Please note some properties can be set only during virtual machine creation.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/ComputeRP/stable/2022-08-01/examples/virtualMachineExamples/VirtualMachine_Create_LinuxVmWithPatchSettingAssessmentModeOfImageDefault.json
 */
async function createALinuxVMWithAPatchSettingAssessmentModeOfImageDefault() {
  const subscriptionId = "6f3426e6-6635-4b6a-a6dc-cc1c8cf2a496";
  const resourceGroupName = "base_group";
  const vmName = "myVM";
  const parameters = {
    hardwareProfile: { vmSize: "Standard_D2s_v3" },
    location: "UK South",
    networkProfile: {
      networkInterfaces: [
        {
          id: "/subscriptions/6f3426e6-6635-4b6a-a6dc-cc1c8cf2a496/resourceGroups/base_group/providers/Microsoft.Network/networkInterfaces/base",
          primary: true,
        },
      ],
    },
    osProfile: {
      adminPassword: "George355",
      adminUsername: "george",
      computerName: "myVM",
      linuxConfiguration: {
        patchSettings: { assessmentMode: "ImageDefault" },
        provisionVMAgent: true,
      },
    },
    storageProfile: {
      imageReference: {
        offer: "UbuntuServer",
        publisher: "Canonical",
        sku: "16.04-LTS",
        version: "latest",
      },
      osDisk: {
        name: "myVMosdisk",
        caching: "ReadWrite",
        createOption: "FromImage",
        managedDisk: { storageAccountType: "Premium_LRS" },
      },
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.virtualMachines.beginCreateOrUpdateAndWait(
    resourceGroupName,
    vmName,
    parameters
  );
  console.log(result);
}

createALinuxVMWithAPatchSettingAssessmentModeOfImageDefault().catch(console.error);