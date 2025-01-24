import React, { useState, useCallback, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RxCross2 } from "react-icons/rx";
import { Calendar, ExternalLink } from "lucide-react";
import {
  CertificateContainer,
  CertificateWrapper,
  CertificateCard,
  CertificateH1,
  PopupContainer,
  PopupCard,
  PopupHeader,
  PopupContent,
  PopupDescription,
  CloseButton,
  PopupTitleWrapper,
  PopupTitle,
  PopupSubtitle,
  CertificateIconWrapper,
  PopupIcon,
  MobileClose,
  CloseText,
  CertificateP,
  CertificateH2,
  Link,
  CertificateIcon,
  CertificateH6,
  BadgeContainer,
  Badge,
  CardDate,
  SkeletonCard,
} from "./CertificateElements";
import fosterLogo from "../../images/certificates/foster-logo.jfif";
import datacampLogo from "../../images/certificates/datacamp-logo.png";
import googleLogo from "../../images/certificates/google-logo.png";
import microsoftLogo from "../../images/certificates/microsoft-logo.png";
// Certificate Card Component
const CertificateCardComponent = memo(({ certificate, onClick }) => (
  <motion.div
    whileHover={{ scale: 1.03 }}
    whileTap={{ scale: 0.98 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <CertificateCard
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onClick()}
    >
      <CertificateIcon
        src={certificate.logo}
        alt={`${certificate.organization} logo`}
        loading="lazy"
      />
      <CertificateH2>
        <Link
          href={certificate.link}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
        >
          {certificate.organization} <ExternalLink size={16} />
        </Link>
      </CertificateH2>
      <CertificateP>{certificate.title}</CertificateP>
      {certificate.date && (
        <CardDate>
          <Calendar size={14} />
          {certificate.date}
        </CardDate>
      )}
      {certificate.skills && (
        <BadgeContainer>
          {certificate.skills.map((skill, index) => (
            <Badge key={index}>{skill}</Badge>
          ))}
        </BadgeContainer>
      )}
    </CertificateCard>
  </motion.div>
));

// Popup Component
const CertificatePopup = memo(({ certificate, onClose }) => (
  <PopupContainer
    as={motion.div}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    onClick={onClose}
  >
    <PopupCard
      as={motion.div}
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 50, opacity: 0 }}
      onClick={(e) => e.stopPropagation()}
    >
      <PopupHeader>
        <PopupTitleWrapper>
          <PopupTitle>{certificate.organization}</PopupTitle>
          <CertificateH6>{certificate.title}</CertificateH6>
          <PopupSubtitle>
            <Calendar size={16} className="mr-2" />
            {certificate.date}
          </PopupSubtitle>
        </PopupTitleWrapper>
        <CloseButton onClick={onClose} aria-label="Close popup">
          <CloseText>Close</CloseText>
          <MobileClose>
            <RxCross2 />
          </MobileClose>
        </CloseButton>
      </PopupHeader>
      <PopupContent>
        <PopupDescription>
          {certificate.skills?.length > 0 && (
            <>
              <h3>Skills</h3>
              <ul>
                {certificate.skills.map((skill, index) => (
                  <motion.li
                    key={index}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </>
          )}
          <CertificateIconWrapper>
            {certificate.icon?.map((iconSrc, index) => (
              <PopupIcon
                key={index}
                src={iconSrc}
                alt={`${certificate.organization} certificate example ${
                  index + 1
                }`}
                loading="lazy"
              />
            ))}
          </CertificateIconWrapper>
        </PopupDescription>
      </PopupContent>
    </PopupCard>
  </PopupContainer>
));

// Main Component
const Certificates = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading state
  React.useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleOpenPopup = useCallback((certificate) => {
    // WHEN CERTIFICATE HAVE MORE DETAILS, SET TO TRUE TO SHOW MORE DETAILS AND CERTIFICATE LINK
    //setSelectedCertificate(certificate);
    setSelectedCertificate(null);
    document.body.style.overflow = "hidden";
  }, []);

  const handleClosePopup = useCallback(() => {
    setSelectedCertificate(null);
    document.body.style.overflow = "auto";
  }, []);

  const certificates = [
    {
      title: "Foster R for Business",
      organization: "UW Foster School of Business",
      // date: "Issued Oct 2024 - Expires Oct 2030",
      logo: fosterLogo,
      link: "",
      skills: ["R", "Business Analytics"],
    },
    {
      title: `Data Visualization ${"\n"} in Tableau`,
      organization: "DataCamp",
      logo: datacampLogo,
      link: "",
      skills: ["Tableau", "Data Visualization"],
    },
    {
      title: "Foster School of Business Excel Credential",
      organization: "UW Foster School of Business",
      logo: fosterLogo,
      link: "https://badgr.com/public/assertions/hST65fNKS6mZPrkdVgWZHA?identity__email=btt212@uw.edu",
      skills: ["Excel", "Data Analysis"],
    },
    {
      title: "Google Data Analytics Professional Certificate",
      organization: "Google",
      logo: googleLogo,
      link: "",
      skills: ["Data Analytics", "RStudio", "Tableau"],
    },
    {
      title: "Microsoft Power BI Data Analyst Professional Certificate",
      organization: "Microsoft",
      logo: microsoftLogo,
      link: "",
      skills: ["Power BI", "Data Analysis"],
    },
  ];

  if (isLoading) {
    return (
      <CertificateContainer>
        <CertificateH1>Certificates</CertificateH1>
        <CertificateWrapper>
          {[1, 2, 3].map((i) => (
            <SkeletonCard key={i} />
          ))}
        </CertificateWrapper>
      </CertificateContainer>
    );
  }

  return (
    <CertificateContainer id="certificates">
      <CertificateH1>Certificates</CertificateH1>
      <CertificateWrapper childCount={certificates.length}>
        {certificates.map((certificate) => (
          <CertificateCardComponent
            key={`${certificate.organization}-${certificate.title}`}
            certificate={certificate}
            onClick={() => handleOpenPopup(certificate)}
          />
        ))}
      </CertificateWrapper>

      <AnimatePresence>
        {selectedCertificate && (
          <CertificatePopup
            certificate={selectedCertificate}
            onClose={handleClosePopup}
          />
        )}
      </AnimatePresence>
    </CertificateContainer>
  );
};

export default memo(Certificates);
