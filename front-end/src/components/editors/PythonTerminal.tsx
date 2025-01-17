import React, { useState, useEffect, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

type PythonTerminalProps = {
  pythonScript: string;
  onRunScript: (runScript: () => Promise<void>) => void;
  sessionId: string;
};

  
const PythonTerminal: React.FC<PythonTerminalProps> = ({ pythonScript, onRunScript, sessionId }) => {
    const [results, setResults] = useState<string[]>([]);
    const localStorageName = 'fossbot-platform';
    const [session_token, setSessionToken] = useState<string>(localStorage.getItem(localStorageName) || '');

    // Create a new web worker
    const pyodideWorker = new Worker(new URL('../../workers/pyodideWorker.ts', import.meta.url));
  
    // Set up event listener for messages from the worker
    pyodideWorker.onmessage = function (event: MessageEvent<string>) {
      console.log('Received result from worker:', event.data);
  
      if (event.data.includes('CMD:')) {
        let result = event.data.split('CMD:')[1];
        setResults((prevResults) => [...prevResults, result]);
  
        //After receiving the result, close socket connection
        pyodideWorker.postMessage(JSON.stringify({ command: 'CLOSE' }));
      }
  
      if (event.data == 'EMPTY_RESULTS') {
        setResults([]);
      }
    };
    
    const runPythonScript = useCallback(async () => {
      if (pythonScript == '') {
        alert('Please write a command in the Editor!');
        return;
      }
       
      // Get the session ID from local storage
      console.log('session_token: ', session_token);

      const scriptWithSession = {
        command: "RUN_SCRIPT",
        script: pythonScript,
        sessionId: sessionId,
        session_token: session_token
      };
  
      pyodideWorker.postMessage(JSON.stringify(scriptWithSession));
    }, [pythonScript]);
  
    useEffect(() => {
      onRunScript(runPythonScript);
    }, [runPythonScript, onRunScript]);

    return (
      <div>
         {/* <Button variant="contained" onClick={testinput}>Test</Button> */}
        {results.map((result, index) => (
          <p key={index}>{result}</p>
        ))}
      </div>
    );


// const PythonTerminal: React.FC<PythonTerminalProps> = ({
//   pythonScript,
//   onRunScript,
//   sessionId,
// }) => {
//   const [results, setResults] = useState<string[]>([]);
//   const [error, setError] = useState<string>('');

//   const { t } = useTranslation();

//   // Create a new web worker
//   const pyodideWorker = new Worker(new URL('../../workers/pyodideWorker.ts', import.meta.url));

//   // Set up event listener for messages from the worker
//   pyodideWorker.onmessage = function (event: MessageEvent<string>) {
//     console.log('Received result from worker:', event.data);

//     if (event.data.includes('CMD:')) {
//       let result = event.data.split('CMD:')[1];
//       setResults((prevResults) => [...prevResults, result]);

//       //After receiving the result, close socket connection
//       pyodideWorker.postMessage(JSON.stringify({ command: 'CLOSE' }));
//     }

//     if (event.data == 'EMPTY_RESULTS') {
//       setResults([]);
//     }

  };

//   const runPythonScript = useCallback(async () => {
//     if (pythonScript == '') {
//       setError(t('errors.noCommandError'));
//       return;
//     }
//     const scriptWithSession = {
//       command: 'RUN_SCRIPT',
//       script: pythonScript,
//       sessionId: sessionId,
//     };

//     pyodideWorker.postMessage(JSON.stringify(scriptWithSession));
//     setError('');
//   }, [pythonScript]);

//   useEffect(() => {
//     onRunScript(runPythonScript);
//   }, [runPythonScript, onRunScript]);

//   return (
//     <div>
//       {error && (
//         <>
//           <p className="errorText">{error}</p>
//         </>
//       )}
//       {results.map((result, index) => (
//         <p key={index}>{result}</p>
//       ))}
//     </div>
//   );
// };

export default PythonTerminal;
