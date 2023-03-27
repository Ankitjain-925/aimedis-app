import { useRouter } from 'next/router';
import React from 'react';

const Emergency = () => {
  const router = useRouter();
  const { patientId } = router.query;

  return <div>Emergency</div>;
};

export default Emergency;
