import * as React from "react";
import {
  Html,
  Body,
  Container,
  Section,
  Text,
  Heading,
  Hr,
} from "@react-email/components";

interface EmailTemplateProps {
  Name: string;
  Email: string;
  Message: string;
}

const main = {
  backgroundColor: "#f9fafb",
  padding: "20px",
};

const container = {
  maxWidth: "600px",
  margin: "0 auto",
  border: "1px solid #e5e7eb",
  borderRadius: "8px",
};

const header = {
  background: "linear-gradient(90deg, #38bdf8, #818cf8, #c084fc)",
  padding: "12px 20px",
  borderRadius: "6px 6px 0 0",
  color: "#fff",
};

const bodyContent = {
  backgroundColor: "#ffffff",
  padding: "20px",
  borderRadius: "0 0 6px 6px",
  color: "#111827",
};

const detailText = {
  fontSize: "14px",
  marginBottom: "8px",
  color: "#111827",
};

const messageContainer = {
  marginTop: "16px",
  padding: "12px",
  backgroundColor: "#f3f4f6",
  borderRadius: "6px",
  fontSize: "14px",
  lineHeight: "1.6",
  whiteSpace: "pre-wrap" as "pre-wrap",
};

const footerText = {
  marginTop: "24px",
  fontSize: "13px",
  color: "#6b7280",
};


export function EmailTemplate({ Name, Email, Message }: EmailTemplateProps) {
  return (
    <Html lang="en">
      <Body style={main}>
        <Container style={container}>
          <Section style={header}>
            <Heading as="h2" style={{ margin: 0, color: '#fff', fontSize: '24px' }}>
              New Portfolio Message
            </Heading>
          </Section>

          <Section style={bodyContent}>
            <Text style={{ fontSize: "16px", margin: "0 0 10px 0" }}>
              <strong>Hello Khali,</strong>
            </Text>

            <Text style={{ fontSize: "15px", color: "#374151", margin: "0 0 16px 0" }}>
              You’ve received a new message from your portfolio contact form.
            </Text>

            <Hr style={{ margin: "16px 0", border: "none", borderTop: "1px solid #e5e7eb" }} />

            <Text style={detailText}>
              <strong>Name:</strong> {Name}
            </Text>
            <Text style={detailText}>
              <strong>Email:</strong> {Email}
            </Text>

            <Section style={messageContainer}>
              <Text style={{ margin: 0 }}>
                {Message}
              </Text>
            </Section>

            <Text style={footerText}>
              — Sent from your Portfolio Website
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}