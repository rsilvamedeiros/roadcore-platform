import { Button, Checkbox, Input, Select, Switch } from "@roadcore/ui";

const assetTypeOptions = [
  { label: "Truck", value: "truck" },
  { label: "Trailer", value: "trailer" },
  { label: "Bus", value: "bus" },
];

export default function AdminNewLeadPage() {
  return (
    <main className="flex flex-1 flex-col items-center gap-6 p-8">
      <div className="w-full max-w-sm">
        <h1 className="text-xl font-semibold text-foreground">New lead</h1>
        <p className="text-sm text-muted">
          Log a lead received by phone or e-mail — see docs/04-modules/crm.md.
        </p>

        <form className="mt-6 flex flex-col gap-4 rounded-lg border border-border bg-surface-elevated p-6">
          <Input aria-label="Company name" name="companyName" placeholder="Company name" />
          <Select
            label="Asset type"
            name="assetType"
            options={assetTypeOptions}
            placeholder="Choose one"
          />
          <Checkbox label="I agree to be contacted" name="acceptContact" />
          <div className="flex items-center justify-between">
            <Switch label="Notify sales team" name="notify" />
            <Button variant="primary" type="submit">
              Save lead
            </Button>
          </div>
        </form>
      </div>
    </main>
  );
}
