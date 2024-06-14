import { appConfig } from "@/config";
import Link from "next/link";

export default function Page() {
  return (
    <main>
      <div className="p-6 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">
          Terms of Service for {appConfig.app.name}
        </h1>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
          <p className="text-lg leading-relaxed">
            Welcome to {appConfig.app.name}. By using our services, you
            agree to be bound by the following terms and conditions. Please read
            them carefully.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Account Registration</h2>
          <p className="text-lg leading-relaxed">
            To use our services, you must register for an account by providing
            your email, name, and avatar. You agree to provide accurate and
            complete information and to keep this information up to date.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">User Responsibilities</h2>
          <p className="text-lg leading-relaxed">
            As a user, you are responsible for maintaining the confidentiality
            of your account information, including your password. You are also
            responsible for all activities that occur under your account. You
            agree to notify us immediately of any unauthorized use of your
            account.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Acceptable Use</h2>
          <p className="text-lg leading-relaxed">
            You agree not to use our services for any unlawful or prohibited
            activities, including but not limited to:
          </p>
          <ul className="list-disc list-inside ml-4">
            <li className="mb-2">
              Uploading or sharing illegal or unauthorized content.
            </li>
            <li className="mb-2">
              Violating any applicable laws or regulations.
            </li>
            <li className="mb-2">Infringing on the rights of others.</li>
            <li className="mb-2">
              Interfering with the operation of our services.
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
          <p className="text-lg leading-relaxed">
            We implement measures to protect your data, including encryption and
            access controls. However, you acknowledge that no method of
            transmission over the internet or electronic storage is completely
            secure.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Termination</h2>
          <p className="text-lg leading-relaxed">
            We reserve the right to suspend or terminate your account and access
            to our services at our discretion, without notice, if you violate
            these terms or engage in any activity that may harm our services or
            other users.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">
            Limitation of Liability
          </h2>
          <p className="text-lg leading-relaxed">
            To the fullest extent permitted by law, {appConfig.app.name}
            shall not be liable for any indirect, incidental, special,
            consequential, or punitive damages, or any loss of profits or
            revenues, whether incurred directly or indirectly, or any loss of
            data, use, goodwill, or other intangible losses resulting from your
            use of our services.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">
            Changes to These Terms
          </h2>
          <p className="text-lg leading-relaxed">
            We may update these Terms of Service from time to time. We will
            notify you of any changes by posting the new Terms of Service on our
            website. You are advised to review these terms periodically for any
            changes.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="text-lg leading-relaxed">
            If you have any questions or concerns about these Terms of Service,
            please contact us at:
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
          These Terms of Service were last updated on 6th June 2024
        </p>
      </div>
    </main>
  );
}
