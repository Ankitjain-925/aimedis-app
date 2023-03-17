import { useRouter } from 'next/router';
import React from 'react';

const Patient = () => {
  const router = useRouter();
  const { patientId } = router.query;

  return <div>Patient: {patientId}</div>;
};

export default Patient;
