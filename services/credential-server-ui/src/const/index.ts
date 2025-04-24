enum CredentialType {
  RARE_EVO = "Rare EVO Attendee",
  GLEIF = "Qualified vLEI Issuer",
  LE = "Legal Entity",
  IOT_CRED = "IOT Credential",
}

const CredentialTypes = [
  CredentialType.RARE_EVO,
  CredentialType.GLEIF,
  CredentialType.LE,
  CredentialType.IOT_CRED,
];

const CredentialMap: Record<string, CredentialType> = {
  EJxnJdxkHbRw2wVFNe4IUOPLt8fEtg9Sr3WyTjlgKoIb: CredentialType.RARE_EVO,
  "EBfdlu8R27Fbx-ehrqwImnK-8Cm79sqbAQ4MmvEAYqao": CredentialType.GLEIF,
  "ENPXp1vQzRF6JwIuS-mp2U8Uf1MoADoP_GqQ62VsDZWY": CredentialType.LE,
  "EKuEdo-RjjQWY8fhnTiIHMnEyRc9gBGGY4COV46K1WCP": CredentialType.IOT_CRED,
};

const SchemaAID = {
  [CredentialType.RARE_EVO]: "EJxnJdxkHbRw2wVFNe4IUOPLt8fEtg9Sr3WyTjlgKoIb",
  [CredentialType.GLEIF]: "EBfdlu8R27Fbx-ehrqwImnK-8Cm79sqbAQ4MmvEAYqao",
  [CredentialType.LE]: "ENPXp1vQzRF6JwIuS-mp2U8Uf1MoADoP_GqQ62VsDZWY",
  [CredentialType.IOT_CRED]: "EKuEdo-RjjQWY8fhnTiIHMnEyRc9gBGGY4COV46K1WCP",
};

const CredentialTypeAttributes = {
  [CredentialType.RARE_EVO]: [
    {
      key: "attendeeName",
      label: "Name",
    },
  ],
  [CredentialType.GLEIF]: [
    {
      key: "LEI",
      label: "LEI",
    },
  ],
  [CredentialType.LE]: [
    {
      key: "LEI",
      label: "LEI",
    },
  ],
  [CredentialType.IOT_CRED]: [
    {
      key: "mac",
      label: "MAC Address",
    },
    {
      key: "server",
      label: "Server IP",
    },
    {
      key: "topic",
      label: "Topic",
    },
  ],
};

export {
  CredentialType,
  CredentialTypes,
  CredentialMap,
  SchemaAID,
  CredentialTypeAttributes,
};
