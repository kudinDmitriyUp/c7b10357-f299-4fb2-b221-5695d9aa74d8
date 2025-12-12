"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroMetrics from '@/components/sections/hero/HeroMetrics';
import MediaSplitAbout from '@/components/sections/about/MediaSplitAbout';
import FeatureCardFour from '@/components/sections/feature/FeatureCardFour';
import MetricCardEight from '@/components/sections/metrics/MetricCardEight';
import TeamCardSix from '@/components/sections/team/TeamCardSix';
import TestimonialCardSeven from '@/components/sections/testimonial/TestimonialCardSeven';
import FaqBase from '@/components/sections/faq/FaqBase';
import ContactCenterForm from '@/components/sections/contact/ContactCenterForm';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import { Bone, Hand, Heart, HelpCircle, Shield, Star, Users, Zap } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="background-highlight"
      borderRadius="pill"
      contentWidth="large"
      sizing="mediumSizeExtraSmallSpacing"
      background="none"
      cardStyle="gradient-bordered"
      primaryButtonStyle="shadow"
      secondaryButtonStyle="radial-glow"
      headingFontWeight="semibold"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          brandName="ProAlign Chiropractic"
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765552061336-b3jpmaf3.jpg"
          logoAlt="ProAlign Chiropractic Logo"
          button={{
            text: "Book Appointment",
            href: "#contact"
          }}
          className="bg-white border-b border-gray-200"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroMetrics
          title="Experience Premium Chiropractic Care"
          description="Advanced spinal health treatments from licensed professionals. Restore mobility, eliminate pain, and achieve optimal wellness with our comprehensive approach to chiropractic medicine."
          tag="Clinical Excellence"
          tagIcon={Heart}
          buttons={[
            {
              text: "Schedule Consultation",
              href: "#contact"
            },
            {
              text: "Learn More",
              href: "#about"
            }
          ]}
          metricsLabel="Trusted by thousands of patients seeking relief and recovery"
          metrics={[
            {
              id: "1",
              value: "20+",
              label: "Years of Excellence"
            },
            {
              id: "2",
              value: "5000+",
              label: "Patients Treated"
            },
            {
              id: "3",
              value: "95%",
              label: "Success Rate"
            }
          ]}
          className="min-h-screen flex flex-col justify-center"
          titleClassName="text-5xl md:text-6xl font-bold tracking-tight"
          descriptionClassName="text-lg md:text-xl text-gray-600 max-w-2xl"
          buttonClassName="rounded-full px-8 py-3 font-semibold transition-all"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="about" data-section="about">
        <MediaSplitAbout
          title="Premium Chiropractic Care for Modern Health"
          description="ProAlign Chiropractic combines cutting-edge diagnostic technology with time-honored healing practices. Our licensed chiropractors are committed to identifying the root cause of your pain and creating personalized treatment plans that deliver lasting results. We believe in treating the whole person, not just symptoms."
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765552063310-x7qudi4x.jpg"
          imageAlt="Dr. Sarah Johnson conducting patient consultation"
          imagePosition="right"
          buttons={[
            {
              text: "Explore Our Services",
              href: "#features"
            }
          ]}
          useInvertedBackground="noInvert"
          titleClassName="text-4xl md:text-5xl font-bold"
          descriptionClassName="text-base md:text-lg text-gray-700 leading-relaxed"
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardFour
          title="Our Treatment Specializations"
          description="Comprehensive chiropractic solutions designed for your optimal health"
          tag="Clinical Services"
          tagIcon={Zap}
          features={[
            {
              title: "Spinal Adjustment",
              description: "Precise manipulation of vertebrae to restore proper alignment, reduce nerve compression, and eliminate chronic pain through proven chiropractic techniques.",
              icon: Bone
            },
            {
              title: "Therapeutic Massage",
              description: "Professional soft tissue therapy to relieve muscle tension, improve circulation, and accelerate healing as part of comprehensive care.",
              icon: Hand
            },
            {
              title: "Posture Correction",
              description: "Specialized exercises and ergonomic guidance to correct postural imbalances and prevent future injuries in daily life.",
              icon: Zap
            },
            {
              title: "Pain Management",
              description: "Multi-disciplinary approach to acute and chronic pain relief without reliance on pharmaceuticals, using natural therapeutic methods.",
              icon: Shield
            }
          ]}
          textboxLayout="default"
          animationType="slide-up"
          containerStyle="default"
          useInvertedBackground="noInvert"
          titleClassName="text-4xl md:text-5xl font-bold mb-6"
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardEight
          title="Proven results from our committed clinical practice"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765552068146-kdhnjc6p.jpg"
          imageAlt="Modern ProAlign Chiropractic clinic facility"
          metrics={[
            {
              id: "1",
              value: "20+",
              title: "Years of Clinical Experience"
            },
            {
              id: "2",
              value: "5000+",
              title: "Patients Successfully Treated"
            },
            {
              id: "3",
              value: "95%",
              title: "Patient Satisfaction Rate"
            },
            {
              id: "4",
              value: "100%",
              title: "Licensed Professionals"
            }
          ]}
          metricVariant="border"
          useInvertedBackground="noInvert"
          titleClassName="text-3xl md:text-4xl font-bold max-w-3xl"
          valueClassName="text-4xl md:text-5xl font-bold"
          metricTitleClassName="text-base text-gray-700"
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardSix
          title="Meet Our Clinical Team"
          description="Experienced licensed professionals dedicated to your health"
          tag="Expert Team"
          tagIcon={Users}
          members={[
            {
              id: "1",
              name: "Dr. Sarah Johnson",
              role: "Chief Chiropractor, DC",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765552068843-2dir4e0a.jpg",
              imageAlt: "Dr. Sarah Johnson"
            },
            {
              id: "2",
              name: "Dr. Michael Chen",
              role: "Clinical Director, DC",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765552069626-loq9oldi.jpg",
              imageAlt: "Dr. Michael Chen"
            },
            {
              id: "3",
              name: "Lisa Rodriguez",
              role: "Therapeutic Massage Specialist",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765552070279-a5qwixv1.jpg",
              imageAlt: "Lisa Rodriguez"
            },
            {
              id: "4",
              name: "Dr. James Patterson",
              role: "Sports Medicine Chiropractor, DC",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765552070925-bewxi39n.jpg",
              imageAlt: "Dr. James Patterson"
            }
          ]}
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          containerStyle="default"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          titleClassName="text-4xl md:text-5xl font-bold"
          descriptionClassName="text-lg text-gray-600"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardSeven
          title="What Our Patients Say"
          description="Real stories from real people who transformed their health through ProAlign Chiropractic"
          tag="Patient Testimonials"
          tagIcon={Star}
          testimonials={[
            {
              id: "1",
              companyName: "Local Executive",
              quote: "After 5 years of chronic back pain, Dr. Johnson finally gave me relief. The personalized treatment plan changed my life completely. I can now enjoy activities I thought I'd lost forever.",
              author: "Margaret Thompson, CEO"
            },
            {
              id: "2",
              companyName: "Marathon Runner",
              quote: "Dr. Chen's sports medicine expertise got me back to competitive running within weeks. His combination of spinal adjustments and therapeutic guidance was exactly what I needed.",
              author: "David Martinez, Athlete"
            },
            {
              id: "3",
              companyName: "Professional Musician",
              quote: "The posture correction program combined with regular adjustments eliminated my neck and shoulder pain. As a musician, I depend on my body mechanics, and ProAlign understands that.",
              author: "Jessica Liu, Concert Violinist"
            },
            {
              id: "4",
              companyName: "Office Professional",
              quote: "I was skeptical at first, but the holistic approach really works. Lisa's massage therapy combined with Dr. Patterson's adjustments addressed my ergonomic issues at the root.",
              author: "Robert Anderson, Corporate Manager"
            },
            {
              id: "5",
              companyName: "Teacher",
              quote: "After my car accident, I was referred to ProAlign. Their comprehensive treatment plan and patient education helped me recover fully. Highly recommend their professional care.",
              author: "Emily Watson, High School Teacher"
            },
            {
              id: "6",
              companyName: "Retiree",
              quote: "At 68, I thought my mobility issues were permanent. ProAlign proved me wrong. The licensed professionals genuinely care about long-term health, not just quick fixes.",
              author: "Richard Golden, Retired Architect"
            }
          ]}
          animationType="slide-up"
          variant="card"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          titleClassName="text-4xl md:text-5xl font-bold"
          descriptionClassName="text-lg text-gray-600"
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqBase
          title="Frequently Asked Questions"
          description="Everything you need to know about our chiropractic services and care approach"
          tag="Help & Support"
          tagIcon={HelpCircle}
          faqs={[
            {
              id: "1",
              title: "Is chiropractic care safe?",
              content: "Yes. Chiropractic care is one of the safest healthcare professions. All our practitioners are fully licensed and use evidence-based techniques. Spinal adjustments have been used safely for decades with exceptional safety profiles when performed by qualified professionals like our team."
            },
            {
              id: "2",
              title: "How many sessions will I need?",
              content: "Treatment duration varies based on your condition, severity, and individual response to care. During your initial consultation, our clinicians will evaluate your condition and provide an estimated treatment plan. Some patients experience relief within 2-3 sessions, while others may require several weeks of care for optimal results."
            },
            {
              id: "3",
              title: "Do you accept insurance?",
              content: "Yes, we work with most major insurance providers. Our team can verify your coverage before your appointment and help you understand your benefits. We also offer flexible payment plans for patients without insurance coverage."
            },
            {
              id: "4",
              title: "What should I expect during my first visit?",
              content: "Your first appointment includes a comprehensive health history, physical examination, and diagnostic assessment. We may take X-rays or perform other imaging if needed. Based on our findings, we'll discuss your diagnosis and create a personalized treatment plan tailored to your health goals."
            },
            {
              id: "5",
              title: "Can I see a chiropractor while pregnant?",
              content: "Yes. Many pregnant patients benefit from chiropractic care to manage pain and maintain proper spinal alignment during pregnancy. We use specialized techniques and pregnancy pillows to ensure your comfort and safety throughout your care."
            },
            {
              id: "6",
              title: "What makes ProAlign Chiropractic different?",
              content: "Our team combines traditional chiropractic expertise with modern diagnostic technology and therapeutic methods. We focus on treating the root cause of your pain, not just symptoms. Our commitment to patient education and personalized care sets us apart in the industry."
            }
          ]}
          textboxLayout="default"
          useInvertedBackground="noInvert"
          animationType="smooth"
          showCard={true}
          titleClassName="text-4xl md:text-5xl font-bold"
          descriptionClassName="text-lg text-gray-600"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenterForm
          title="Schedule Your Consultation"
          description="Contact our clinic to book your personalized chiropractic consultation. Our team is ready to discuss your health goals and create a treatment plan tailored to your needs."
          inputs={[
            {
              name: "name",
              type: "text",
              placeholder: "Full Name",
              required: true
            },
            {
              name: "email",
              type: "email",
              placeholder: "Email Address",
              required: true
            },
            {
              name: "phone",
              type: "tel",
              placeholder: "Phone Number",
              required: true
            },
            {
              name: "condition",
              type: "text",
              placeholder: "Primary Health Concern",
              required: true
            }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell us about your symptoms and health goals...",
            rows: 5,
            required: true
          }}
          useInvertedBackground="noInvert"
          buttonText="Book Appointment"
          titleClassName="text-4xl md:text-5xl font-bold mb-4"
          descriptionClassName="text-lg text-gray-600 mb-8"
          containerClassName="bg-white rounded-2xl shadow-lg p-8 md:p-12 max-w-2xl"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterMedia
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765552076712-jtvhora5.jpg"
          imageAlt="ProAlign Chiropractic modern clinic facility"
          columns={[
            {
              title: "Services",
              items: [
                {
                  label: "Spinal Adjustment",
                  href: "#features"
                },
                {
                  label: "Therapeutic Massage",
                  href: "#features"
                },
                {
                  label: "Posture Correction",
                  href: "#features"
                },
                {
                  label: "Pain Management",
                  href: "#features"
                }
              ]
            },
            {
              title: "Company",
              items: [
                {
                  label: "About Us",
                  href: "#about"
                },
                {
                  label: "Our Team",
                  href: "#team"
                },
                {
                  label: "Contact Us",
                  href: "#contact"
                },
                {
                  label: "Testimonials",
                  href: "#testimonials"
                }
              ]
            },
            {
              title: "Info",
              items: [
                {
                  label: "Hours: Mon-Fri 8am-6pm",
                  href: "#"
                },
                {
                  label: "Phone: (555) 123-4567",
                  href: "tel:5551234567"
                },
                {
                  label: "Address: 123 Wellness Ave",
                  href: "#"
                },
                {
                  label: "Email: info@proalign.com",
                  href: "mailto:info@proalign.com"
                }
              ]
            }
          ]}
          logoText="ProAlign Chiropractic"
          copyrightText="© 2025 ProAlign Chiropractic. All rights reserved."
          logoClassName="w-32 h-auto"
        />
      </div>
    </ThemeProvider>
  );
}