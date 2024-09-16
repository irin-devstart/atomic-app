export const OtypographyVariant = {
  Large: "large",
  Medium: "medium",
  Small: "small",
} as const;

export type typographyVariant =
  typeof OtypographyVariant[keyof typeof OtypographyVariant];
