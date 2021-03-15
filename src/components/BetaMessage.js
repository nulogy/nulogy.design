import React from "react";
import { Alert, Link } from "@nulogy/components";

const BetaMessage = () => (
  <Alert mb="x3">
    This component is currently in beta and is being rolled out in pilot
    locations across Nulogy. They are not currently included in our{" "}
    <Link href="/guides/versioning">versioning system</Link> due to the high
    chance of API changes. Please reach out to Design Ops on Slack if you'd like
    to implement these components.
  </Alert>
);

export default BetaMessage;
