export function parseELFHeader(raw) {
	const view = new DataView(raw),
		EI_CLASS = view.getUint8(4),
		EI_DATA = view.getUint8(5);
	return {
		EI_MAG0: view.getUint8(0),
		EI_MAG1: view.getUint8(1),
		EI_MAG2: view.getUint8(2),
		EI_MAG3: view.getUint8(3),
		EI_CLASS,
		EI_DATA,
		EI_VERSION: view.getUint8(6),
		EI_OSABI: view.getUint8(7),
		EI_ABIVERSION: view.getUint8(8),
		e_type: view.getUint16(0x10, EI_DATA == 1),
		e_machine: view.getUint16(0x12, EI_DATA == 1),
		e_version: view.getUint32(0x14, EI_DATA == 1),
		e_entry: EI_CLASS == 1 ? view.getUint32(0x18, EI_DATA == 1) : view.getBigUint64(0x18, EI_DATA == 1),
		e_phoff: EI_CLASS == 1 ? view.getUint32(0x1c, EI_DATA == 1) : view.getBigUint64(0x20, EI_DATA == 1),
		e_shoff: EI_CLASS == 1 ? view.getUint32(0x20, EI_DATA == 1) : view.getBigUint64(0x28, EI_DATA == 1),
		e_flags: view.getUint32(EI_CLASS == 1 ? 0x24 : 0x30, EI_DATA == 1),
		e_ehsize: view.getUint16(EI_CLASS == 1 ? 0x28 : 0x34, EI_DATA == 1),
		e_phentsize: view.getUint16(EI_CLASS == 1 ? 0x2a : 0x36, EI_DATA == 1),
		e_phnum: view.getUint16(EI_CLASS == 1 ? 0x2c : 0x38, EI_DATA == 1),
		e_shentsize: view.getUint16(EI_CLASS == 1 ? 0x2e : 0x3a, EI_DATA == 1),
		e_shnum: view.getUint16(EI_CLASS == 1 ? 0x30 : 0x3c, EI_DATA == 1),
		e_shstrndx: view.getUint16(EI_CLASS == 1 ? 0x32 : 0x3e, EI_DATA == 1),
	};
}

export function parseProgramHeaderEntry(raw, isLE, is32bit) {
	const view = new DataView(raw);

	return {
		type: view.getUint32(0, isLE),
		flags: view.getUint32(is32bit ? 0x18 : 4, isLE),
		offset: is32bit ? view.getUint32(4, isLE) : view.getBigUint64(8, isLE),
		vaddr: is32bit ? view.getUint32(8, isLE) : view.getBigUint64(0x10, isLE),
		paddr: is32bit ? view.getUint32(0x0c, isLE) : view.getBigUint64(0x18, isLE),
		filesz: is32bit ? view.getUint32(0x10, isLE) : view.getBigUint64(0x20, isLE),
		memsz: is32bit ? view.getUint32(0x14, isLE) : view.getBigUint64(0x28, isLE),
		align: is32bit ? view.getUint32(0x1c, isLE) : view.getBigUint64(0x30, isLE),
	};
}

export function parseProgramHeader(raw, size, isLE, is32bit) {
	const entries = [];
	for (let i = 0; i < raw.byteLength; i += size) {
		const sliced = raw.slice(i, i + size);
		const entry = parseProgramHeaderEntry(sliced, isLE, is32bit);
		entries.push(entry);
	}
	return entries;
}

export function parseSectionHeaderEntry(raw, isLE, is32bit) {
	const view = new DataView(raw);
	return {
		name: view.getUint32(0, isLE),
		type: view.getUint32(4, isLE),
		flags: is32bit ? view.getUint32(8, isLE) : view.getBigUint64(8, isLE),
		addr: is32bit ? view.getUint32(0x0c, isLE) : view.getBigUint64(0x10, isLE),
		offset: is32bit ? view.getUint32(0x10, isLE) : view.getBigUint64(0x18, isLE),
		size: is32bit ? view.getUint32(0x14, isLE) : view.getBigUint64(0x20, isLE),
		link: view.getUint32(is32bit ? 0x18 : 0x28, isLE),
		info: view.getUint32(is32bit ? 0x1c : 0x2c, isLE),
		addralign: is32bit ? view.getUint32(0x20, isLE) : view.getBigUint64(0x30, isLE),
		entsize: is32bit ? view.getUint32(0x24, isLE) : view.getBigUint64(0x38, isLE),
	};
}

export function parseSectionHeader(raw, size, isLE, is32bit) {
	const entries = [];
	for (let i = 0; i < raw.byteLength; i += size) {
		const sliced = raw.slice(i, i + size);
		const entry = parseSectionHeaderEntry(sliced, isLE, is32bit);
		entries.push(entry);
	}
	return entries;
}