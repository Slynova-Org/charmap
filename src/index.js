'use strict'

/**
 * charmap
 *
 * @license MIT
 * @copyright Slynova - Romain Lanz <romain.lanz@slynova.ch>
 */

const latin = {
  'À': 'A', 'Á': 'A', 'Â': 'A', 'Ã': 'A', 'Ä': 'A', 'Å': 'A', 'Æ': 'AE',
  'Ç': 'C', 'È': 'E', 'É': 'E', 'Ê': 'E', 'Ë': 'E', 'Ì': 'I', 'Í': 'I',
  'Î': 'I', 'Ï': 'I', 'Ð': 'D', 'Ñ': 'N', 'Ò': 'O', 'Ó': 'O', 'Ô': 'O',
  'Õ': 'O', 'Ö': 'O', 'Ő': 'O', 'Ø': 'O', 'Ù': 'U', 'Ú': 'U', 'Û': 'U',
  'Ü': 'U', 'Ű': 'U', 'Ý': 'Y', 'Þ': 'TH', 'Ÿ': 'Y', 'ß': 'ss', 'à': 'a',
  'á': 'a', 'â': 'a', 'ã': 'a', 'ä': 'a', 'å': 'a', 'æ': 'ae', 'ç': 'c',
  'è': 'e', 'é': 'e', 'ê': 'e', 'ë': 'e', 'ì': 'i', 'í': 'i', 'î': 'i',
  'ï': 'i', 'ð': 'd', 'ñ': 'n', 'ò': 'o', 'ó': 'o', 'ô': 'o', 'õ': 'o',
  'ö': 'o', 'ő': 'o', 'ø': 'o', 'ù': 'u', 'ú': 'u', 'û': 'u', 'ü': 'u',
  'ű': 'u', 'ý': 'y', 'þ': 'th', 'ÿ': 'y',
}

const latinSymbols = {
  '©': '(c)', 'œ': 'oe', 'Œ': 'OE', '∑': 'sum', '®': '(r)', '†': '+',
  '“': '"', '”': '"', '‘': "'", '’': "'", '∂': 'd', 'ƒ': 'f', '™': 'tm',
  '℠': 'sm', '…': '...', '˚': 'o', 'º': 'o', 'ª': 'a', '•': '*',
  '∆': 'delta', '∞': 'infinity', '♥': 'love', '&': 'and', '|': 'or',
  '<': 'less', '>': 'greater', '@': 'at',
}

const greek = {
  'α': 'a', 'β': 'b', 'γ': 'g', 'δ': 'd', 'ε': 'e', 'ζ': 'z', 'η': 'h',
  'θ': '8', 'ι': 'i', 'κ': 'k', 'λ': 'l', 'μ': 'm', 'ν': 'n', 'ξ': '3',
  'ο': 'o', 'π': 'p', 'ρ': 'r', 'σ': 's', 'τ': 't', 'υ': 'y', 'φ': 'f',
  'χ': 'x', 'ψ': 'ps', 'ω': 'w', 'ά': 'a', 'έ': 'e', 'ί': 'i', 'ό': 'o',
  'ύ': 'y', 'ή': 'h', 'ώ': 'w', 'ς': 's', 'ϊ': 'i', 'ΰ': 'y', 'ϋ': 'y',
  'ΐ': 'i', 'Α': 'A', 'Β': 'B', 'Γ': 'G', 'Δ': 'D', 'Ε': 'E', 'Ζ': 'Z',
  'Η': 'H', 'Θ': '8', 'Ι': 'I', 'Κ': 'K', 'Λ': 'L', 'Μ': 'M', 'Ν': 'N',
  'Ξ': '3', 'Ο': 'O', 'Π': 'P', 'Ρ': 'R', 'Σ': 'S', 'Τ': 'T', 'Υ': 'Y',
  'Φ': 'F', 'Χ': 'X', 'Ψ': 'PS', 'Ω': 'W', 'Ά': 'A', 'Έ': 'E', 'Ί': 'I',
  'Ό': 'O', 'Ύ': 'Y', 'Ή': 'H', 'Ώ': 'W', 'Ϊ': 'I', 'Ϋ': 'Y',
}

const turkish = {
  'ş': 's', 'Ş': 'S', 'ı': 'i', 'İ': 'I', 'ç': 'c', 'Ç': 'C', 'ü': 'u',
  'Ü': 'U', 'ö': 'o', 'Ö': 'O', 'ğ': 'g', 'Ğ': 'G',
}

const romanian = {
  'ă': 'a', 'î': 'i', 'ș': 's', 'ț': 't', 'â': 'a',
  'Ă': 'A', 'Î': 'I', 'Ș': 'S', 'Ț': 'T', 'Â': 'A',
}

const russian = {
  'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'е': 'e', 'ё': 'yo',
  'ж': 'zh', 'з': 'z', 'и': 'i', 'й': 'j', 'к': 'k', 'л': 'l', 'м': 'm',
  'н': 'n', 'о': 'o', 'п': 'p', 'р': 'r', 'с': 's', 'т': 't', 'у': 'u',
  'ф': 'f', 'х': 'h', 'ц': 'c', 'ч': 'ch', 'ш': 'sh', 'щ': 'sh', 'ъ': '',
  'ы': 'y', 'ь': '', 'э': 'e', 'ю': 'yu', 'я': 'ya',
  'А': 'A', 'Б': 'B', 'В': 'V', 'Г': 'G', 'Д': 'D', 'Е': 'E', 'Ё': 'Yo',
  'Ж': 'Zh', 'З': 'Z', 'И': 'I', 'Й': 'J', 'К': 'K', 'Л': 'L', 'М': 'M',
  'Н': 'N', 'О': 'O', 'П': 'P', 'Р': 'R', 'С': 'S', 'Т': 'T', 'У': 'U',
  'Ф': 'F', 'Х': 'H', 'Ц': 'C', 'Ч': 'Ch', 'Ш': 'Sh', 'Щ': 'Sh', 'Ъ': '',
  'Ы': 'Y', 'Ь': '', 'Э': 'E', 'Ю': 'Yu', 'Я': 'Ya',
}

const ukrainian = {
  'Є': 'Ye', 'І': 'I', 'Ї': 'Yi', 'Ґ': 'G', 'є': 'ye', 'і': 'i',
  'ї': 'yi', 'ґ': 'g',
}

const czech = {
  'č': 'c', 'ď': 'd', 'ě': 'e', 'ň': 'n', 'ř': 'r', 'š': 's', 'ť': 't',
  'ů': 'u', 'ž': 'z', 'Č': 'C', 'Ď': 'D', 'Ě': 'E', 'Ň': 'N', 'Ř': 'R',
  'Š': 'S', 'Ť': 'T', 'Ů': 'U', 'Ž': 'Z',
}

const slovak = {
  'á': 'a', 'ä': 'a', 'č': 'c', 'ď': 'd', 'é': 'e', 'í': 'i', 'ľ': 'l',
  'ĺ': 'l', 'ň': 'n', 'ó': 'o', 'ô': 'o', 'ŕ': 'r', 'š': 's', 'ť': 't',
  'ú': 'u', 'ý': 'y', 'ž': 'z',
  'Á': 'a', 'Ä': 'A', 'Č': 'C', 'Ď': 'D', 'É': 'E', 'Í': 'I', 'Ľ': 'L',
  'Ĺ': 'L', 'Ň': 'N', 'Ó': 'O', 'Ô': 'O', 'Ŕ': 'R', 'Š': 'S', 'Ť': 'T',
  'Ú': 'U', 'Ý': 'Y', 'Ž': 'Z',
}

const polish = {
  'ą': 'a', 'ć': 'c', 'ę': 'e', 'ł': 'l', 'ń': 'n', 'ó': 'o', 'ś': 's',
  'ź': 'z', 'ż': 'z',
  'Ą': 'A', 'Ć': 'C', 'Ę': 'E', 'Ł': 'L', 'Ń': 'N', 'Ó': 'O', 'Ś': 'S',
  'Ź': 'Z', 'Ż': 'Z',
}

const latvian = {
  'ā': 'a', 'č': 'c', 'ē': 'e', 'ģ': 'g', 'ī': 'i', 'ķ': 'k', 'ļ': 'l',
  'ņ': 'n', 'š': 's', 'ū': 'u', 'ž': 'z',
  'Ā': 'A', 'Č': 'C', 'Ē': 'E', 'Ģ': 'G', 'Ī': 'I', 'Ķ': 'K', 'Ļ': 'L',
  'Ņ': 'N', 'Š': 'S', 'Ū': 'U', 'Ž': 'Z',
}

const arabic = {
  'أ': 'a', 'ب': 'b', 'ت': 't', 'ث': 'th', 'ج': 'g', 'ح': 'h', 'خ': 'kh', 'د': 'd',
  'ذ': 'th', 'ر': 'r', 'ز': 'z', 'س': 's', 'ش': 'sh', 'ص': 's', 'ض': 'd', 'ط': 't',
  'ظ': 'th', 'ع': 'aa', 'غ': 'gh', 'ف': 'f', 'ق': 'k', 'ك': 'k', 'ل': 'l', 'م': 'm',
  'ن': 'n', 'ه': 'h', 'و': 'o', 'ي': 'y',
}

const lithuanian = {
  'ą': 'a', 'č': 'c', 'ę': 'e', 'ė': 'e', 'į': 'i', 'š': 's', 'ų': 'u',
  'ū': 'u', 'ž': 'z',
  'Ą': 'A', 'Č': 'C', 'Ę': 'E', 'Ė': 'E', 'Į': 'I', 'Š': 'S', 'Ų': 'U',
  'Ū': 'U', 'Ž': 'Z',
}

const serbian = {
  'ђ': 'dj', 'ј': 'j', 'љ': 'lj', 'њ': 'nj', 'ћ': 'c', 'џ': 'dz',
  'đ': 'dj', 'Ђ': 'Dj', 'Ј': 'j', 'Љ': 'Lj', 'Њ': 'Nj', 'Ћ': 'C',
  'Џ': 'Dz', 'Đ': 'Dj',
}

const azerbaijani = {
  'ç': 'c', 'ə': 'e', 'ğ': 'g', 'ı': 'i', 'ö': 'o', 'ş': 's', 'ü': 'u',
  'Ç': 'C', 'Ə': 'E', 'Ğ': 'G', 'İ': 'I', 'Ö': 'O', 'Ş': 'S', 'Ü': 'U',
}

const georgian = {
  'ა': 'a', 'ბ': 'b', 'გ': 'g', 'დ': 'd', 'ე': 'e', 'ვ': 'v', 'ზ': 'z',
  'თ': 't', 'ი': 'i', 'კ': 'k', 'ლ': 'l', 'მ': 'm', 'ნ': 'n', 'ო': 'o',
  'პ': 'p', 'ჟ': 'j', 'რ': 'r', 'ს': 's', 'ტ': 't', 'უ': 'u', 'ფ': 'f',
  'ქ': 'q', 'ღ': 'g', 'ყ': 'y', 'შ': 'sh', 'ჩ': 'ch', 'ც': 'c', 'ძ': 'dz',
  'წ': 'w', 'ჭ': 'ch', 'ხ': 'x', 'ჯ': 'j', 'ჰ': 'h',
}

const vietnamese = {
  'Ạ': 'A', 'Ả': 'A', 'Ầ': 'A', 'Ấ': 'A', 'Ậ': 'A', 'Ẩ': 'A', 'Ẫ': 'A',
  'Ằ': 'A', 'Ắ': 'A', 'Ặ': 'A', 'Ẳ': 'A', 'Ẵ': 'A', 'Ẹ': 'E', 'Ẻ': 'E',
  'Ẽ': 'E', 'Ề': 'E', 'Ế': 'E', 'Ệ': 'E', 'Ể': 'E', 'Ễ': 'E', 'Ị': 'I',
  'Ỉ': 'I', 'Ĩ': 'I', 'Ọ': 'O', 'Ỏ': 'O', 'Ồ': 'O', 'Ố': 'O', 'Ộ': 'O',
  'Ổ': 'O', 'Ỗ': 'O', 'Ơ': 'O', 'Ờ': 'O', 'Ớ': 'O', 'Ợ': 'O', 'Ở': 'O',
  'Ỡ': 'O', 'Ụ': 'U', 'Ủ': 'U', 'Ũ': 'U', 'Ư': 'U', 'Ừ': 'U', 'Ứ': 'U',
  'Ự': 'U', 'Ử': 'U', 'Ữ': 'U', 'Ỳ': 'Y', 'Ỵ': 'Y', 'Ỷ': 'Y', 'Ỹ': 'Y',
  'Đ': 'D', 'ạ': 'a', 'ả': 'a', 'ầ': 'a', 'ấ': 'a', 'ậ': 'a', 'ẩ': 'a',
  'ẫ': 'a', 'ằ': 'a', 'ắ': 'a', 'ặ': 'a', 'ẳ': 'a', 'ẵ': 'a', 'ẹ': 'e',
  'ẻ': 'e', 'ẽ': 'e', 'ề': 'e', 'ế': 'e', 'ệ': 'e', 'ể': 'e', 'ễ': 'e',
  'ị': 'i', 'ỉ': 'i', 'ĩ': 'i', 'ọ': 'o', 'ỏ': 'o', 'ồ': 'o', 'ố': 'o',
  'ộ': 'o', 'ổ': 'o', 'ỗ': 'o', 'ơ': 'o', 'ờ': 'o', 'ớ': 'o', 'ợ': 'o',
  'ở': 'o', 'ỡ': 'o', 'ụ': 'u', 'ủ': 'u', 'ũ': 'u', 'ư': 'u', 'ừ': 'u',
  'ứ': 'u', 'ự': 'u', 'ử': 'u', 'ữ': 'u', 'ỳ': 'y', 'ỵ': 'y', 'ỷ': 'y',
  'ỹ': 'y', 'đ': 'd',
}

const currency = {
  '€': 'euro', '₢': 'cruzeiro', '₣': 'french franc', '£': 'pound',
  '₤': 'lira', '₥': 'mill', '₦': 'naira', '₧': 'peseta', '₨': 'rupee',
  '₩': 'won', '₪': 'new shequel', '₫': 'dong', '₭': 'kip', '₮': 'tugrik',
  '₯': 'drachma', '₰': 'penny', '₱': 'peso', '₲': 'guarani', '₳': 'austral',
  '₴': 'hryvnia', '₵': 'cedi', '¢': 'cent', '¥': 'yen', '元': 'yuan',
  '円': 'yen', '﷼': 'rial', '₠': 'ecu', '¤': 'currency', '฿': 'baht',
  '$': 'dollar', '₹': 'indian rupee',
}

const charmap = Object.assign(
  latin, latinSymbols,
  greek,
  turkish,
  romanian,
  russian,
  ukrainian,
  czech,
  slovak,
  polish,
  latvian,
  arabic,
  lithuanian,
  serbian,
  azerbaijani,
  georgian,
  vietnamese,
  currency
)

function transform (text = null) {
  if (text === null) {
    return ''
  }

  let result = ''

  for (let i = 0; i < text.length; i++) {
    const char = text[i]
    result += charmap[char] !== void 0 ? charmap[char] : char
  }

  return result
}

module.exports = { transform, charmap }