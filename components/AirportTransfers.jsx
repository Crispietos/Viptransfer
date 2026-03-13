import { PaperAirplaneIcon, UserGroupIcon, WifiIcon } from '@heroicons/react/20/solid';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const features = [
  {
    name: 'Long Distance Transfer from Dublin Airport',
    description: 'Private, door-to-door service to/from Dublin Airport with luxury Mercedes vehicles.',
    icon: PaperAirplaneIcon,
    href: '/long-distance-transfer-from-dublin-airport'
  },
  {
    name: 'Private Driver',
    description: 'Experienced drivers providing punctual, safe, and comfortable journeys across Ireland and beyond.',
    icon: UserGroupIcon,
    href: '/private-driver'
  },
  {
    name: 'Premium Vehicles & Amenities',
    description: 'Highest quality fleet with complimentary Wi-Fi, bottled water, and flight monitoring.',
    icon: WifiIcon,
    href: '/premium-vehicles-amenities'
  }
];

export default function AirportTransfersSection() {
  return (
    <div className="container-fluid py-5" style={{ backgroundColor: '#0EA5E9' }}>
      <div className="container py-4 py-lg-5">
        <div className="row align-items-center g-4 g-lg-5">
          <div className="col-lg-6">
            <h2 className="fw-semibold text-uppercase opacity-75 mb-2" style={{ letterSpacing: '0.04em', color: '#fff' }}>Our Services</h2>
            <h3 className="display-5 fw-bold mb-3" style={{ color: '#fff' }}>Premium Transfers in Ireland</h3>
            <p className="fs-5 mb-4" style={{ maxWidth: 620, color: 'rgba(255,255,255,0.85)' }}>
              Discover VIPTransfer’s range of exclusive transport solutions designed for your comfort and peace of mind.
            </p>

            <div className="row">
              {features.map((feature) => (
                <div key={feature.name} className="col-md-6 col-xl-4 mb-4">
                  <div className="card h-100 border-0 shadow-sm rounded-4">
                    <div className="card-body d-flex flex-column">
                      <div className="d-inline-flex align-items-center justify-content-center rounded-3 mb-3" style={{ width: 48, height: 48, backgroundColor: '#E7F5FF' }}>
                        <feature.icon
                          aria-hidden="true"
                          style={{ width: 24, height: 24, color: '#0EA5E9' }}
                        />
                      </div>
                      <h5 className="card-title fw-bold" style={{ color: '#0B253A' }}>{feature.name}</h5>
                      <p className="card-text mb-3" style={{ lineHeight: 1.5, color: 'rgba(11,37,58,0.8)' }}>{feature.description}</p>
                      <div className="mt-auto">
                        <Link href={feature.href} className="btn rounded-3 px-4 py-2 fw-semibold" style={{ backgroundColor: '#0EA5E9', color: '#fff', border: 'none' }}>
                          Learn more →
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-lg-6">
            <div className="bg-white p-2 p-lg-3 rounded-4 shadow-sm text-center">
              <Image
                src="/assets/imgs/PrivateChauffeur.webp"
                alt="VIPTransfer Service"
                width={800}
                height={450}
                className="img-fluid rounded-4"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}