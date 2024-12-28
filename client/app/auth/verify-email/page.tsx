'use client'
import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { useAuthStore } from '@/app/store/authStore';
import toast from 'react-hot-toast';
// import Image from 'next/image';

const VerifyEmailPage = () => {
  const [code, setCode] = useState(['', '', '', '', '', '']);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);  // Allowing null values
  const router = useRouter();
  const { error, isLoading, verifyEmail } = useAuthStore();

  const handleChange = (index: number, value: string) => {
    const newCode = [...code];

    // Handle pasted content
    if (value.length > 1) {
      const pastedCode = value.slice(0, 6).split('');
      for (let i = 0; i < 6; i++) {
        newCode[i] = pastedCode[i] || '';
      }
      setCode(newCode);

      // Focus on the last non-empty input or the first empty one
      const lastFilledIndex = newCode.findLastIndex((digit) => digit !== '');
      const focusIndex = lastFilledIndex < 5 ? lastFilledIndex + 1 : 5;
      if (inputRefs.current[focusIndex]) {
        inputRefs.current[focusIndex]?.focus();  // Safe null check
      }
    } else {
      newCode[index] = value;
      setCode(newCode);

      // Move focus to the next input field if value is entered
      if (value && index < 5 && inputRefs.current[index + 1]) {
        inputRefs.current[index + 1]?.focus();  // Safe null check
      }
    }
  };

  const handleKeyDown = (index: number, e: { key: string }) => {
    if (e.key === 'Backspace' && !code[index] && index !== 0) {
      inputRefs.current[index - 1]?.focus();  // Safe null check
    }
  };

  const handleSubmit = async (e?: React.FormEvent) => {
    e?.preventDefault();
    const verificationCode = code.join('');
    try {
      await verifyEmail(verificationCode);  // Pass the joined code
      router.push('/');
      toast.success('Email verified successfully');
    } catch (error) {
      console.log(error);
      toast.error('Email verification failed');
    }
  };

  // Auto-submit when all fields are filled
  useEffect(() => {
    if (code.every((digit) => digit !== '')) {
      handleSubmit();  // No need to create a synthetic event
    }
  }, [code, handleSubmit]);

  return (
    <section className='w-full min-h-screen flex items-center justify-center'>
      <div className='max-w-lg w-[80%] lg:w-full bg-slate-300 bg-opacity-50 backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden mx-auto my-24'>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='bg-green-200 bg-opacity-50 backdrop-filter backdrop-blur-xl rounded-2xl shadow-2xl p-8 w-full max-w-lg'
        >
          <h2 className='lg:text-4xl text-2xl font-bold mb-6 text-center bg-gradient-to-r from-green-900 to-green-700 text-transparent bg-clip-text font-afacad'>
            Verify Your Email
          </h2>
          <p className='text-center text-green-800 mb-6 lg:text-xl'>
            Enter the 6-digit code sent to your email address.
          </p>
          <form onSubmit={handleSubmit} className='space-y-6'>
            <div className='flex justify-between'>
              {code.map((digit, index) => {
                return (
                  <input
                    key={index}
                    ref={(el) => {(inputRefs.current[index] = el)}} // Assigning the input ref
                    type='text'
                    maxLength={1} // Allow only one character per input
                    value={digit}
                    onChange={(e) => handleChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    className=' size-7 md:size-12 text-center text-2xl font-bold bg-green-700 text-white border-2 border-green-600 rounded-lg focus:border-green-500 focus:outline-none' />
                );
              })}
            </div>
            {error && <p className='text-red-500 font-semibold mt-2'>{error}</p>}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type='submit'
              disabled={isLoading || code.some((digit) => !digit)}
              className='w-full bg-gradient-to-r from-green-500 to-green-600 text-white font-bold py-3 px-4 rounded-lg shadow-lg hover:from-green-600 hover:to-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 disabled:opacity-50'
            >
              {isLoading ? 'Verifying...' : 'Verify Email'}
            </motion.button>
          </form>
        </motion.div>
      </div>
      {/* <div className='max-md:hidden mr-auto'>
        <Image src={'/verify.jpg'} alt={'Join us'} width={600} height={1000} priority/>
      </div> */}
    </section>
  );
};

export default VerifyEmailPage;
