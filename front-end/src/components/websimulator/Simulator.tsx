import { useEffect, useState } from 'react';
import { Box } from '@mui/material';



type WebGLAppProps = {
  appsessionId: string;
  onMountChange: (isMounted: boolean) => void;
};

const WebGLApp: React.FC<WebGLAppProps> = ({ appsessionId, onMountChange }) => {

  const handleIframeLoad = () => {
    onMountChange(true); // Call the callback function with the updated value
  };


  const SimUrl = process.env.REACT_APP_SIM_URL + appsessionId;
  // console.log('sim url ', SimUrl)

// <!--   const SimUrl = "http://localhost:5000/" + appsessionId; -->

  return (
    <Box width={'100%'}>
      <iframe
        src={SimUrl}
        width={'100%'}
        height={'100%'}
        id="simulatorIframe"
        frameBorder="0"
        allowFullScreen
        onLoad={handleIframeLoad}
      ></iframe>
      {/* {isScriptLoaded && (
        <canvas id='canvas' style={{ display: 'block', width: '100%', position: 'relative' }}>
          HTML5 canvas appears to be unsupported in the current browser.<br />
          Please try updating or use a different browser.
        </canvas>
      )}
      Status elements */}
    </Box>
  );
};

export default WebGLApp;
