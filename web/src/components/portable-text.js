import React from "react"; // eslint-disable-line no-unused-vars
import clientConfig from "../../client-config";
import BasePortableText from "@sanity/block-content-to-react";
import serializers from "./serializers";

const PortableText = ({ blocks }) => (
  <BasePortableText blocks={blocks} serializers={serializers} {...clientConfig.sanity} />
);

export default PortableText;
