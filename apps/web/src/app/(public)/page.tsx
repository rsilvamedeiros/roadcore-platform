import { Button, Checkbox, Input, Select, Switch } from "@roadcore/ui";

const assetTypeOptions = [
  { label: "Truck", value: "truck" },
  { label: "Trailer", value: "trailer" },
  { label: "Bus", value: "bus" },
];

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-6 p-8">
      <div className="text-center">
        <h1 className="text-2xl font-semibold text-foreground">RoadCore Platform</h1>
        <p className="text-muted">Public surface placeholder — see docs/04-modules/marketplace.md.</p>
      </div>

      <form className="flex w-full max-w-sm flex-col gap-4 rounded-lg border border-border bg-surface-elevated p-6">
        <Input aria-label="Company name" name="companyName" placeholder="Company name" />
        <Select label="Asset type" name="assetType" options={assetTypeOptions} placeholder="Choose one" />
        <Checkbox label="I agree to be contacted" name="acceptContact" />
        <div className="flex items-center justify-between">
          <Switch label="Notify me" name="notify" />
          <Button variant="primary" type="submit">
            Request a quote
          </Button>
        </div>
      </form>
    </main>
  );
}
