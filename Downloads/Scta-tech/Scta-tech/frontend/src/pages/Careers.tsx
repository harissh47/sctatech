import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

type FormState = {
  applyingFor: string;
  name: string;
  email: string;
  phone: string;
  qualification: string;
  address: string;
  skills: string;
  totalExpYrs: string;
  totalExpMth: string;
  relevantExp: string;
  currentCTCLakh: string;
  currentCTCK: string;
  expectedCTCLakh: string;
  expectedCTCK: string;
  isNegotiable: string;
  noticePeriod: string;
  reasonForChange: string;
  currentLocation: string;
  willingToRelocate: string;
  preferredContact: string;
  resume: File | null;
  securityCode: string;
};

const FORM_INITIAL_STATE: FormState = {
  applyingFor: '',
  name: '',
  email: '',
  phone: '',
  qualification: '',
  address: '',
  skills: '',
  totalExpYrs: '0',
  totalExpMth: '0',
  relevantExp: '',
  currentCTCLakh: '00',
  currentCTCK: '00',
  expectedCTCLakh: '00',
  expectedCTCK: '00',
  isNegotiable: 'Yes',
  noticePeriod: '',
  reasonForChange: '',
  currentLocation: '',
  willingToRelocate: 'Yes',
  preferredContact: '',
  resume: null,
  securityCode: '',
};

const REQUIRED_FIELDS: (keyof FormState)[] = [
  'applyingFor',
  'name',
  'email',
  'phone',
  'qualification',
  'address',
  'skills',
  'totalExpYrs',
  'totalExpMth',
  'relevantExp',
  'currentCTCLakh',
  'currentCTCK',
  'expectedCTCLakh',
  'expectedCTCK',
  'isNegotiable',
  'noticePeriod',
  'reasonForChange',
  'currentLocation',
  'willingToRelocate',
  'preferredContact',
  'securityCode',
];

const SECURITY_CODE = Math.floor(10000 + Math.random() * 90000);

const Careers = () => {
  const [form, setForm] = useState<FormState>({ ...FORM_INITIAL_STATE });
  const [securityCode] = useState(SECURITY_CODE);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type, files } = e.target as HTMLInputElement;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'file' ? (files ? files[0] : null) : value,
    }));
  };

  const handleRadio = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleReset = () => {
    setForm({ ...FORM_INITIAL_STATE });
    setError('');
    setSuccess('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    for (let field of REQUIRED_FIELDS) {
      if (form[field] === '' || form[field] === null) {
        setError('Please fill all required fields.');
        return;
      }
    }

    if (form.securityCode !== securityCode.toString()) {
      setError('Security code is incorrect.');
      return;
    }
    setSuccess('Application submitted successfully!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f2027] via-[#2c5364] to-[#232526] text-gray-100 font-sans">
      <Navbar />
      <main className="px-4 py-16 max-w-4xl mx-auto">
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 p-8 md:p-14 transition-all duration-300">
          <h2 className="text-4xl font-extrabold text-cloud mb-8 tracking-tight drop-shadow-lg">Career Application</h2>
          <form onSubmit={handleSubmit} onReset={handleReset} className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="col-span-full">
              <label className="block text-lg font-semibold mb-2 tracking-wide">Applying for <span className="text-pink-400">*</span></label>
              <input name="applyingFor" value={form.applyingFor} onChange={handleChange} className="input-modern text-xl" required />
            </div>

            {/* Left Column */}
            <div className="space-y-6">
              <Input label="Name" name="name" value={form.name} onChange={handleChange} />
              <Input label="Phone/Mobile No" name="phone" value={form.phone} onChange={handleChange} />
              <Textarea label="Contact Address" name="address" value={form.address} onChange={handleChange} />
              <ExperienceSelect form={form} handleChange={handleChange} />
              <CTCInput label="Current CTC" lakhName="currentCTCLakh" kName="currentCTCK" form={form} handleChange={handleChange} />
              <Radio label="Is Negotiable" name="isNegotiable" options={['Yes', 'No']} selected={form.isNegotiable} onChange={handleRadio} />
              <Input label="Reason for change" name="reasonForChange" value={form.reasonForChange} onChange={handleChange} />
              <Radio label="Willing to relocate" name="willingToRelocate" options={['Yes', 'No']} selected={form.willingToRelocate} onChange={handleRadio} />
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <Input label="E-Mail id" name="email" value={form.email} onChange={handleChange} />
              <Input label="Qualification" name="qualification" value={form.qualification} onChange={handleChange} />
              <Textarea label="Skills" name="skills" value={form.skills} onChange={handleChange} />
              <Input label="Relevant Experience" name="relevantExp" value={form.relevantExp} onChange={handleChange} />
              <CTCInput label="Expected CTC" lakhName="expectedCTCLakh" kName="expectedCTCK" form={form} handleChange={handleChange} />
              <Input label="Notice period" name="noticePeriod" value={form.noticePeriod} onChange={handleChange} />
              <Input label="Current Location" name="currentLocation" value={form.currentLocation} onChange={handleChange} />
              <Input label="Preferred time to contact" name="preferredContact" value={form.preferredContact} onChange={handleChange} />
              <div>
                <label className="block font-semibold mb-2 tracking-wide">Security Code <span className="text-pink-400">*</span></label>
                <div className="flex gap-3 items-center">
                  <span className="font-mono text-xl bg-gray-900/80 px-5 py-2 rounded-lg border border-gray-700 shadow-inner select-none">{securityCode}</span>
                  <input name="securityCode" value={form.securityCode} onChange={handleChange} className="input-modern w-32" required />
                </div>
              </div>
            </div>

            {/* Status and Actions */}
            <div className="col-span-full text-center mt-10">
              {error && <div className="text-pink-400 text-lg font-medium mb-4">{error}</div>}
              {success && <div className="text-green-400 text-lg font-medium mb-4">{success}</div>}
              <div className="flex justify-center gap-8">
                <button type="submit" className="btn-modern bg-cloud-blue hover:bg-blue-600">Submit</button>
                <button type="reset" className="btn-modern bg-gray-800 hover:bg-gray-700">Reset</button>
              </div>
            </div>
          </form>
        </div>
      </main>
      <Footer />

      <style>{`
        .input-modern {
          width: 100%;
          border-radius: 1rem;
          border: 1.5px solid #3b82f6;
          background: rgba(30, 41, 59, 0.85);
          color: #fff;
          padding: 0.85rem 1.25rem;
          font-size: 1.1rem;
          outline: none;
          transition: border 0.2s, box-shadow 0.2s, background 0.2s;
          box-shadow: 0 2px 12px 0 rgba(59,130,246,0.05);
        }
        .input-modern:focus {
          border-color: #a5b4fc;
          background: rgba(30, 41, 59, 1);
          box-shadow: 0 4px 24px 0 rgba(59,130,246,0.10);
        }
        .btn-modern {
          font-weight: 600;
          padding: 0.85rem 2.5rem;
          border-radius: 1rem;
          color: #fff;
          box-shadow: 0 2px 16px 0 rgba(59,130,246,0.10);
          transition: background 0.2s, box-shadow 0.2s, transform 0.1s;
          font-size: 1.1rem;
          letter-spacing: 0.03em;
        }
        .btn-modern:active {
          transform: scale(0.97);
        }
        ::placeholder {
          color: #cbd5e1;
          opacity: 1;
        }
        
      `}</style>
    </div>
  );
};

// --- Small Form Components ---

const Input = ({ label, name, value, onChange }: { label: string; name: string; value: string; onChange: React.ChangeEventHandler<HTMLInputElement>; }) => (
  <div>
    <label className="block font-semibold mb-2 tracking-wide">{label} <span className="text-pink-400">*</span></label>
    <input name={name} value={typeof value === 'string' ? value : ''} onChange={onChange} className="input-modern" required />
  </div>
);

const Textarea = ({ label, name, value, onChange }: { label: string; name: string; value: string; onChange: React.ChangeEventHandler<HTMLTextAreaElement>; }) => (
  <div>
    <label className="block font-semibold mb-2 tracking-wide">{label} <span className="text-pink-400">*</span></label>
    <textarea name={name} value={value} onChange={onChange} className="input-modern h-28 resize-none" required />
  </div>
);

const Radio = ({ label, name, options, selected, onChange }: { label: string; name: string; options: string[]; selected: string; onChange: React.ChangeEventHandler<HTMLInputElement>; }) => (
  <div>
    <label className="block font-semibold mb-2 tracking-wide">{label} <span className="text-pink-400">*</span></label>
    <div className="flex gap-6">
      {options.map(opt => (
        <label key={opt} className="inline-flex items-center cursor-pointer">
          <input type="radio" name={name} value={opt} checked={selected === opt} onChange={onChange} className="accent-cloud-blue w-5 h-5" />
          <span className="ml-2">{opt}</span>
        </label>
      ))}
    </div>
  </div>
);

const CTCInput = ({ label, lakhName, kName, form, handleChange }: { label: string; lakhName: keyof FormState; kName: keyof FormState; form: FormState; handleChange: React.ChangeEventHandler<HTMLInputElement>; }) => (
  <div>
    <label className="block font-semibold mb-2 tracking-wide">{label} <span className="text-pink-400">*</span></label>
    <div className="flex gap-3 items-center">
      <input name={lakhName} value={typeof form[lakhName] === 'string' ? form[lakhName] : ''} onChange={handleChange} className="input-modern w-20" maxLength={2} required />
      <span>Lakh</span>
      <input name={kName} value={typeof form[kName] === 'string' ? form[kName] : ''} onChange={handleChange} className="input-modern w-20" maxLength={2} required />
      <span>k</span>
    </div>
  </div>
);

const ExperienceSelect = ({ form, handleChange }: { form: FormState; handleChange: React.ChangeEventHandler<HTMLSelectElement>; }) => (
  <div>
    <label className="block font-semibold mb-2 tracking-wide">Total Experience <span className="text-pink-400">*</span></label>
    <div className="flex gap-3 items-center">
      <select
        name="totalExpYrs"
        value={form.totalExpYrs}
        onChange={handleChange}
        className="input-modern w-20"
      >
        {[...Array(31)].map((_, i) => <option key={i}>{i}</option>)}
      </select>
      <span>Yrs</span>
      <select
        name="totalExpMth"
        value={form.totalExpMth}
        onChange={handleChange}
        className="input-modern w-20"
      >
        {[...Array(12)].map((_, i) => <option key={i}>{i}</option>)}
      </select>
      <span>Mth</span>
    </div>
  </div>
);

// --- End Small Form Components ---

export default Careers;
