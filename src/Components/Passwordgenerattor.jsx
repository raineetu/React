import { useCallback, useState } from "react";

function PasswordGenerator() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // Password generation logic
  const generator = useCallback(() => {
    let pass = "";
    let str = "QWERTYUIOPASDFGHJKLZXCVBNM"; // Uppercase letters

    // Add numbers if allowed
    if (numberAllowed) {
      str += "0123456789";
    }

    // Add special characters if allowed
    if (charAllowed) {
      str += "!@#$%^&*()_+-=[]{}|;:,.<>?";
    }

    // Generate password of specified length
    for (let i = 0; i < length; i++) {
      pass += str.charAt(Math.floor(Math.random() * str.length)); // Randomly select a character according to length
    }

    setPassword(pass); // Update password state
  }, [length, numberAllowed, charAllowed]); // Dependencies

  //password copy
  const copytoClipboard = () => {
    navigator.clipboard.writeText(password).then(() => {
      alert("Password copied to clipboard");
    });
  };

  return (
    <>
      {/* for whole screen */}
      <div className="flex justify-center items-center h-screen bg-black font-serif">
        <div className=" p-10 w-full h-auto max-w-md mx-auto rounded-lg border-2 border-white shadow-md shadow-white bg-white flex flex-col gap-4">
          <h1 className="text-4xl text-center font-bold text-green-400 mb-3">
            Password Generator
          </h1>

          {/* password genertaor and button */}
          <div className="text-center border-2 border-gray-300 rounded-lg bg-white p-2 text-left relative">
            <input
              type="text"
              value={password}
              placeholder="Password"
              className="outline-none"
              readOnly
            />
            <button
              className="bg-blue-300 text-white p-2 w-20 rounded shrink-0 absolute top-1/2 right-0 transform -translate-y-1/2 cursor-pointer"
              onClick={copytoClipboard}
            >
              Copy
            </button>
          </div>

          <div className="flex justify-center mt-5">
            <button
              onClick={generator}
              className="bg-green-500 text-white p-2 rounded"
            >
              Generate Password
            </button>
          </div>

          {/* make slider */}
          <div className="flex gap-9">
            <input
              type="range"
              min="8"
              max="20"
              value={length}
              className="w-[50%] cursor-pointer"
              onChange={(e) => {
                setLength(Number(e.target.value));
              }}
            />
            <p className="font-semibold text-orange-500 ">Length:{length}</p>
          </div>

          <div className="flex gap-8 text-red-500">
            <label>
              <input
                type="checkbox"
                checked={numberAllowed}
                onChange={(e) => setNumberAllowed(e.target.checked)}
              />
              Allow Numbers
            </label>
            <label>
              <input
                type="checkbox"
                checked={charAllowed}
                onChange={(e) => setCharAllowed(e.target.checked)}
              />
              Allow Special Characters
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default PasswordGenerator;
