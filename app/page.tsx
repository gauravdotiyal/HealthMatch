import PatientForm from "@/components/forms/PatientForm";
// import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";



export default function Home() {
  return (
    <div className="flex h-screen max-h-screen">
      {/* OTP Verification or Passkey  */}

      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[496px]">
          {/* logo */}
          <h1 className="text-2xl">HealthMatch</h1>
          <PatientForm />
          <div className="text-14-regular mt-20 flex justify-between">
            <p className="justify-items-end text-dark-600 xl:text-left">
              © 2024 HealthMatch
            </p>
           <Link href="/?admin=true" className="text-green-500">
           Admin
           </Link>
          </div>
        </div>
      </section>
      <Image
      src="/assets/images/onboarding-img.png"
      height={1000}
      width={1000}
      alt="patient"
      className="side-img max-w-[50%]"
      />
    </div>
   
  );
}
