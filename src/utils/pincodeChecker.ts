export interface PincodeResult {
  valid: boolean;
  city: string;
  state: string;
  estimatedDeliveryDays: number;
  deliveryDateStr: string;
  isCodAvailable: boolean;
  courierPartner: string;
  isExpressAvailable: boolean;
  error?: string;
}

// Map of major Indian postal regions for instant localized lookups
const PINCODE_MAP: Record<string, { city: string; state: string; days: number }> = {
  // Delhi NCR
  '110001': { city: 'New Delhi', state: 'Delhi NCR', days: 2 },
  '110020': { city: 'South Delhi', state: 'Delhi NCR', days: 2 },
  '122001': { city: 'Gurugram', state: 'Haryana', days: 2 },
  '201301': { city: 'Noida', state: 'Uttar Pradesh', days: 2 },

  // Mumbai & Maharashtra
  '400001': { city: 'Mumbai', state: 'Maharashtra', days: 2 },
  '400050': { city: 'Bandra, Mumbai', state: 'Maharashtra', days: 2 },
  '411001': { city: 'Pune', state: 'Maharashtra', days: 3 },
  '440001': { city: 'Nagpur', state: 'Maharashtra', days: 3 },

  // Karnataka & Bengaluru
  '560001': { city: 'Bengaluru', state: 'Karnataka', days: 2 },
  '560034': { city: 'Koramangala, Bengaluru', state: 'Karnataka', days: 2 },
  '570001': { city: 'Mysuru', state: 'Karnataka', days: 3 },

  // Tamil Nadu & Chennai
  '600001': { city: 'Chennai', state: 'Tamil Nadu', days: 2 },
  '600028': { city: 'Mylapore, Chennai', state: 'Tamil Nadu', days: 2 },
  '641001': { city: 'Coimbatore', state: 'Tamil Nadu', days: 3 },

  // Telangana & Hyderabad
  '500001': { city: 'Hyderabad', state: 'Telangana', days: 2 },
  '500081': { city: 'HITEC City, Hyderabad', state: 'Telangana', days: 2 },

  // Rajasthan
  '302001': { city: 'Jaipur', state: 'Rajasthan', days: 2 },
  '342001': { city: 'Jodhpur', state: 'Rajasthan', days: 3 },
  '313001': { city: 'Udaipur', state: 'Rajasthan', days: 3 },

  // West Bengal
  '700001': { city: 'Kolkata', state: 'West Bengal', days: 3 },
  '700091': { city: 'Salt Lake, Kolkata', state: 'West Bengal', days: 3 },

  // Gujarat
  '380001': { city: 'Ahmedabad', state: 'Gujarat', days: 2 },
  '395001': { city: 'Surat', state: 'Gujarat', days: 2 },

  // Kerala
  '682001': { city: 'Kochi', state: 'Kerala', days: 3 },
  '695001': { city: 'Thiruvananthapuram', state: 'Kerala', days: 3 },

  // Uttar Pradesh & Punjab
  '226001': { city: 'Lucknow', state: 'Uttar Pradesh', days: 3 },
  '160017': { city: 'Chandigarh', state: 'Punjab / Chandigarh', days: 2 },
  '143001': { city: 'Amritsar', state: 'Punjab', days: 3 },
};

export function checkDeliveryPincode(pincode: string): PincodeResult {
  const cleanPin = pincode.trim();

  // Validate 6 digits
  if (!/^\d{6}$/.test(cleanPin)) {
    return {
      valid: false,
      city: '',
      state: '',
      estimatedDeliveryDays: 0,
      deliveryDateStr: '',
      isCodAvailable: false,
      courierPartner: '',
      isExpressAvailable: false,
      error: 'Please enter a valid 6-digit Indian PIN code.'
    };
  }

  // Exact match or heuristic based on first digit
  const match = PINCODE_MAP[cleanPin];
  let city = match?.city;
  let state = match?.state;
  let days = match?.days || 3;

  if (!match) {
    // Determine broad zone by first digit
    const firstDigit = cleanPin[0];
    switch (firstDigit) {
      case '1':
        city = 'North India Hub';
        state = 'Delhi / Punjab / Haryana';
        days = 3;
        break;
      case '2':
        city = 'Central-North Region';
        state = 'Uttar Pradesh / Uttarakhand';
        days = 3;
        break;
      case '3':
        city = 'Western Zone';
        state = 'Rajasthan / Gujarat';
        days = 3;
        break;
      case '4':
        city = 'West & Central';
        state = 'Maharashtra / Goa / MP';
        days = 3;
        break;
      case '5':
        city = 'South-Central Hub';
        state = 'Andhra / Telangana / Karnataka';
        days = 3;
        break;
      case '6':
        city = 'South Zone';
        state = 'Tamil Nadu / Kerala';
        days = 3;
        break;
      case '7':
        city = 'Eastern Hub';
        state = 'West Bengal / Odisha / NE';
        days = 4;
        break;
      case '8':
        city = 'East-Central Zone';
        state = 'Bihar / Jharkhand';
        days = 4;
        break;
      default:
        city = 'India Delivery Zone';
        state = 'Standard Area';
        days = 4;
    }
  }

  // Calculate delivery date formatted e.g. "Tuesday, 8 Sep"
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + days);
  
  const options: Intl.DateTimeFormatOptions = { 
    weekday: 'short', 
    month: 'short', 
    day: 'numeric' 
  };
  const deliveryDateStr = targetDate.toLocaleDateString('en-IN', options);

  return {
    valid: true,
    city: city || 'Your City',
    state: state || 'Your State',
    estimatedDeliveryDays: days,
    deliveryDateStr,
    isCodAvailable: true,
    courierPartner: 'BlueDart / Delhivery Express',
    isExpressAvailable: days <= 2
  };
}

export function formatINR(amount: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(amount);
}
