import { appConfig } from "@/config";
import Link from "next/link";

export default function Page() {
  return (
    <main>
      <div className="p-6 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">
          Privacy Policy for {appConfig.app.name}
        </h1>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
          <p className="text-lg leading-relaxed">
            Welcome to {appConfig.app.name}. We value your privacy and are
            committed to protecting your personal information. This Privacy
            Policy explains how we collect, use, and safeguard your information
            when you use our service. By using {appConfig.app.name}, you agree
            to the terms of this Privacy Policy.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">
            Information We Collect
          </h2>
          <p className="text-lg leading-relaxed">
            When you sign up for {appConfig.app.name}, we collect the following
            information:
          </p>
          <ul className="list-disc list-inside ml-4">
            <li className="mb-2">
              <strong>Email Address</strong>: We use your email address to
              create and manage your account, communicate with you, and send
              important updates.
            </li>
            <li className="mb-2">
              <strong>Name</strong>: Your name helps us personalize your
              experience and address you appropriately in our communications.
            </li>
            <li className="mb-2">
              <strong>Avatar</strong>: If you choose to upload an avatar, it
              will be used to personalize your profile within our service.
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">
            How We Use Your Information
          </h2>
          <p className="text-lg leading-relaxed">
            We use the information we collect for the following purposes:
          </p>
          <ul className="list-disc list-inside ml-4">
            <li className="mb-2">
              <strong>Account Management</strong>: To create and manage your
              user account.
            </li>
            <li className="mb-2">
              <strong>Communication</strong>: To send you updates,
              notifications, and respond to your inquiries.
            </li>
            <li className="mb-2">
              <strong>Personalization</strong>: To personalize your experience
              and display your profile information within the service.
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
          <p className="text-lg leading-relaxed">
            We prioritize the security of your data. We implement the following
            measures to protect your information:
          </p>
          <ul className="list-disc list-inside ml-4">
            <li className="mb-2">
              <strong>Access Control</strong>: We restrict access to your
              personal information to authorized personnel only.
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">
            Data Sharing and Disclosure
          </h2>
          <p className="text-lg leading-relaxed">
            We do not share, sell, or disclose your personal information to
            third parties, except in the following circumstances:
          </p>
          <ul className="list-disc list-inside ml-4">
            <li className="mb-2">
              <strong>Legal Requirements</strong>: If required by law, we may
              disclose your information to comply with legal processes or
              governmental requests.
            </li>
            <li className="mb-2">
              <strong>Protection of Rights</strong>: To protect our rights,
              privacy, safety, or property, and that of our users or the public.
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
          <p className="text-lg leading-relaxed">
            You have the following rights regarding your personal information:
          </p>
          <ul className="list-disc list-inside ml-4">
            <li className="mb-2">
              <strong>Access</strong>: You can request access to the personal
              information we hold about you.
            </li>
            <li className="mb-2">
              <strong>Correction</strong>: You can request correction of
              inaccurate or incomplete personal information.
            </li>
            <li className="mb-2">
              <strong>Deletion</strong>: You can request the deletion of your
              personal information, subject to certain legal obligations.
            </li>
            <li className="mb-2">
              <strong>Objection</strong>: You can object to the processing of
              your personal information in certain circumstances.
            </li>
          </ul>
          <p className="text-lg leading-relaxed">
            To exercise any of these rights, please contact us at{" "}
            <a
              href="mailto:{appConfig.contact.mail}"
              className="text-blue-500 underline"
            >
              {appConfig.contact.mail}
            </a>
            .
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">
            Changes to This Privacy Policy
          </h2>
          <p className="text-lg leading-relaxed">
            We may update this Privacy Policy from time to time. We will notify
            you of any changes by posting the new Privacy Policy on our website.
            You are advised to review this Privacy Policy periodically for any
            changes.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="text-lg leading-relaxed">
            If you have any questions or concerns about this Privacy Policy or
            our data practices, please contact us at:
          </p>
          <p className="text-lg leading-relaxed">
            <strong>Email</strong>:{" "}
            <Link
              href="mailto:{appConfig.contact.mail}"
              className="text-blue-500 underline"
            >
              {appConfig.contact.mail}
            </Link>
          </p>
        </section>

        <p className="text-lg leading-relaxed mt-6">
          This Privacy Policy was last updated on 6th June 2024
        </p>
      </div>
    </main>
  );
}
