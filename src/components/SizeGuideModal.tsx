import React, { useState } from 'react';
import { X, Ruler, CheckCircle2, Sparkles } from 'lucide-react';
import { Gender } from '../types';

interface SizeGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultGender?: Gender;
}

export const SizeGuideModal: React.FC<SizeGuideModalProps> = ({
  isOpen,
  onClose,
  defaultGender = 'women'
}) => {
  const [activeTab, setActiveTab] = useState<'women' | 'men'>(
    defaultGender === 'men' ? 'men' : 'women'
  );
  const [unit, setUnit] = useState<'in' | 'cm'>('in');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div 
        className="bg-white rounded-2xl max-w-2xl w-full p-6 shadow-2xl relative border border-stone-200 animate-scale-in max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-stone-200 pb-4">
          <div className="flex items-center gap-2">
            <Ruler className="w-5 h-5 text-amber-700" />
            <h3 className="font-serif text-xl font-bold text-stone-900">
              Indian Standard Sizing Chart
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full text-stone-400 hover:text-stone-700 hover:bg-stone-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Selector & Unit switch */}
        <div className="flex items-center justify-between my-4">
          <div className="flex bg-stone-100 p-1 rounded-lg">
            <button
              onClick={() => setActiveTab('women')}
              className={`px-4 py-1.5 rounded-md text-xs font-bold transition ${
                activeTab === 'women' ? 'bg-rose-900 text-white shadow-sm' : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Women (Kurti & Dress)
            </button>
            <button
              onClick={() => setActiveTab('men')}
              className={`px-4 py-1.5 rounded-md text-xs font-bold transition ${
                activeTab === 'men' ? 'bg-amber-900 text-white shadow-sm' : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Men (Kurta & Shirt)
            </button>
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold text-stone-600">
            <span>Unit:</span>
            <div className="flex bg-stone-100 p-0.5 rounded">
              <button
                onClick={() => setUnit('in')}
                className={`px-2 py-1 rounded text-xs ${unit === 'in' ? 'bg-stone-800 text-white' : 'text-stone-600'}`}
              >
                Inches
              </button>
              <button
                onClick={() => setUnit('cm')}
                className={`px-2 py-1 rounded text-xs ${unit === 'cm' ? 'bg-stone-800 text-white' : 'text-stone-600'}`}
              >
                CM
              </button>
            </div>
          </div>
        </div>

        {/* Tables */}
        {activeTab === 'women' ? (
          <div className="space-y-4">
            <div className="overflow-x-auto border border-stone-200 rounded-xl">
              <table className="w-full text-left text-xs">
                <thead className="bg-stone-100 text-stone-700 font-bold uppercase">
                  <tr>
                    <th className="p-3">Size</th>
                    <th className="p-3">Bust ({unit})</th>
                    <th className="p-3">Waist ({unit})</th>
                    <th className="p-3">Hip ({unit})</th>
                    <th className="p-3">Kurti Length ({unit})</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200 font-medium text-stone-700">
                  <tr>
                    <td className="p-3 font-bold text-amber-900">XS</td>
                    <td className="p-3">{unit === 'in' ? '32"' : '81 cm'}</td>
                    <td className="p-3">{unit === 'in' ? '26"' : '66 cm'}</td>
                    <td className="p-3">{unit === 'in' ? '36"' : '91 cm'}</td>
                    <td className="p-3">{unit === 'in' ? '44"' : '112 cm'}</td>
                  </tr>
                  <tr className="bg-stone-50/50">
                    <td className="p-3 font-bold text-amber-900">S</td>
                    <td className="p-3">{unit === 'in' ? '34"' : '86 cm'}</td>
                    <td className="p-3">{unit === 'in' ? '28"' : '71 cm'}</td>
                    <td className="p-3">{unit === 'in' ? '38"' : '96 cm'}</td>
                    <td className="p-3">{unit === 'in' ? '44"' : '112 cm'}</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-amber-900">M</td>
                    <td className="p-3">{unit === 'in' ? '36"' : '91 cm'}</td>
                    <td className="p-3">{unit === 'in' ? '30"' : '76 cm'}</td>
                    <td className="p-3">{unit === 'in' ? '40"' : '102 cm'}</td>
                    <td className="p-3">{unit === 'in' ? '45"' : '114 cm'}</td>
                  </tr>
                  <tr className="bg-stone-50/50">
                    <td className="p-3 font-bold text-amber-900">L</td>
                    <td className="p-3">{unit === 'in' ? '38"' : '96 cm'}</td>
                    <td className="p-3">{unit === 'in' ? '32"' : '81 cm'}</td>
                    <td className="p-3">{unit === 'in' ? '42"' : '107 cm'}</td>
                    <td className="p-3">{unit === 'in' ? '45"' : '114 cm'}</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-amber-900">XL</td>
                    <td className="p-3">{unit === 'in' ? '40"' : '102 cm'}</td>
                    <td className="p-3">{unit === 'in' ? '34"' : '86 cm'}</td>
                    <td className="p-3">{unit === 'in' ? '44"' : '112 cm'}</td>
                    <td className="p-3">{unit === 'in' ? '46"' : '117 cm'}</td>
                  </tr>
                  <tr className="bg-stone-50/50">
                    <td className="p-3 font-bold text-amber-900">XXL</td>
                    <td className="p-3">{unit === 'in' ? '42"' : '107 cm'}</td>
                    <td className="p-3">{unit === 'in' ? '36"' : '91 cm'}</td>
                    <td className="p-3">{unit === 'in' ? '46"' : '117 cm'}</td>
                    <td className="p-3">{unit === 'in' ? '46"' : '117 cm'}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900 space-y-1">
              <p className="font-bold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-700" /> Saree & Blouse Sizing Note:
              </p>
              <p>All our Sarees are standard 5.5 meters length and include a 0.8 meter unstitched blouse piece matching the saree pallu border.</p>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="overflow-x-auto border border-stone-200 rounded-xl">
              <table className="w-full text-left text-xs">
                <thead className="bg-stone-100 text-stone-700 font-bold uppercase">
                  <tr>
                    <th className="p-3">Size / Indian Fit</th>
                    <th className="p-3">Chest ({unit})</th>
                    <th className="p-3">Shoulder ({unit})</th>
                    <th className="p-3">Kurta Length ({unit})</th>
                    <th className="p-3">Neck ({unit})</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200 font-medium text-stone-700">
                  <tr>
                    <td className="p-3 font-bold text-amber-900">S (38)</td>
                    <td className="p-3">{unit === 'in' ? '38"' : '96 cm'}</td>
                    <td className="p-3">{unit === 'in' ? '17.5"' : '44 cm'}</td>
                    <td className="p-3">{unit === 'in' ? '40"' : '101 cm'}</td>
                    <td className="p-3">{unit === 'in' ? '15"' : '38 cm'}</td>
                  </tr>
                  <tr className="bg-stone-50/50">
                    <td className="p-3 font-bold text-amber-900">M (40)</td>
                    <td className="p-3">{unit === 'in' ? '40"' : '101 cm'}</td>
                    <td className="p-3">{unit === 'in' ? '18.25"' : '46 cm'}</td>
                    <td className="p-3">{unit === 'in' ? '42"' : '107 cm'}</td>
                    <td className="p-3">{unit === 'in' ? '15.5"' : '39 cm'}</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-amber-900">L (42)</td>
                    <td className="p-3">{unit === 'in' ? '42"' : '107 cm'}</td>
                    <td className="p-3">{unit === 'in' ? '19"' : '48 cm'}</td>
                    <td className="p-3">{unit === 'in' ? '43"' : '109 cm'}</td>
                    <td className="p-3">{unit === 'in' ? '16"' : '41 cm'}</td>
                  </tr>
                  <tr className="bg-stone-50/50">
                    <td className="p-3 font-bold text-amber-900">XL (44)</td>
                    <td className="p-3">{unit === 'in' ? '44"' : '112 cm'}</td>
                    <td className="p-3">{unit === 'in' ? '19.75"' : '50 cm'}</td>
                    <td className="p-3">{unit === 'in' ? '44"' : '112 cm'}</td>
                    <td className="p-3">{unit === 'in' ? '16.5"' : '42 cm'}</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-amber-900">XXL (46)</td>
                    <td className="p-3">{unit === 'in' ? '46"' : '117 cm'}</td>
                    <td className="p-3">{unit === 'in' ? '20.5"' : '52 cm'}</td>
                    <td className="p-3">{unit === 'in' ? '45"' : '114 cm'}</td>
                    <td className="p-3">{unit === 'in' ? '17"' : '43 cm'}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900 space-y-1">
              <p className="font-bold flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-700" /> Comfort Fit Guarantee:
              </p>
              <p>Our kurtas and Nehru jackets are tailored with 3-4 inches ease over body measurements for relaxed movement during pujas, rituals, and ceremonies.</p>
            </div>
          </div>
        )}

        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-stone-900 text-white rounded-lg text-xs font-bold hover:bg-stone-800 transition"
          >
            Got It, Close Guide
          </button>
        </div>

      </div>
    </div>
  );
};
