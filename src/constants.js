export const EI_OSABI = [
	'System V',
	'HP-UX',
	'NetBSD',
	'Linux',
	'GNU Hurd',
	'Solaris',
	'AIX (Monterey)',
	'IRIX',
	'FreeBSD',
	'Tru64',
	'Novell Modesto',
	'OpenBSD',
	'OpenVMS',
	'NonStop Kernel',
	'AROS',
	'FenixOS',
	'Nuxi CloudABI',
	'Stratus Technologies OpenVOS',
],
e_type = [],
e_machine = [],
p_type = [],
sh_type = [],
sh_flags = [];

//Note in C these are prefixed with ET_
e_type[0x00] = 'NONE'; //	Unknown.
e_type[0x01] = 'REL'; //	Relocatable file.
e_type[0x02] = 'EXEC'; //	Executable file.
e_type[0x03] = 'DYN'; //	Shared object.
e_type[0x04] = 'CORE'; //	Core file.
e_type[0xfe00] = 'LOOS'; // Reserved inclusive range. Operating system specific.
e_type[0xfeff] = 'HIOS'; //
e_type[0xff00] = 'LOPROC'; //	Reserved inclusive range. Processor specific.
e_type[0xffff] = 'HIPROC'; //

e_machine[0x00] = 'No specific instruction set';
e_machine[0x01] = 'AT&T WE 32100';
e_machine[0x02] = 'SPARC';
e_machine[0x03] = 'x86';
e_machine[0x04] = 'Motorola 68000 (M68k)';
e_machine[0x05] = 'Motorola 88000 (M88k)';
e_machine[0x06] = 'Intel MCU';
e_machine[0x07] = 'Intel 80860';
e_machine[0x08] = 'MIPS';
e_machine[0x09] = 'IBM System/370';
e_machine[0x0a] = 'MIPS RS3000 Little-endian';
//0x0B - 0x0D Reserved for future use
e_machine[0x0e] = 'Hewlett-Packard PA-RISC';
e_machine[0x0f] = 'Reserved for future use';
e_machine[0x13] = 'Intel 80960';
e_machine[0x14] = 'PowerPC';
e_machine[0x15] = 'PowerPC (64-bit)';
e_machine[0x16] = 'S390, including S390x';
e_machine[0x17] = 'IBM SPU/SPC';
//0x18 - 0x23 Reserved for future use
e_machine[0x24] = 'NEC V800';
e_machine[0x25] = 'Fujitsu FR20';
e_machine[0x26] = 'TRW RH-32';
e_machine[0x27] = 'Motorola RCE';
e_machine[0x28] = 'Arm (up to Armv7/AArch32)';
e_machine[0x29] = 'Digital Alpha';
e_machine[0x2a] = 'SuperH';
e_machine[0x2b] = 'SPARC Version 9';
e_machine[0x2c] = 'Siemens TriCore embedded processor';
e_machine[0x2d] = 'Argonaut RISC Core';
e_machine[0x2e] = 'Hitachi H8/300';
e_machine[0x2f] = 'Hitachi H8/300H';
e_machine[0x30] = 'Hitachi H8S';
e_machine[0x31] = 'Hitachi H8/500';
e_machine[0x32] = 'IA-64';
e_machine[0x33] = 'Stanford MIPS-X';
e_machine[0x34] = 'Motorola ColdFire';
e_machine[0x35] = 'Motorola M68HC12';
e_machine[0x36] = 'Fujitsu MMA Multimedia Accelerator';
e_machine[0x37] = 'Siemens PCP';
e_machine[0x38] = 'Sony nCPU embedded RISC processor';
e_machine[0x39] = 'Denso NDR1 microprocessor';
e_machine[0x3a] = 'Motorola Star*Core processor';
e_machine[0x3b] = 'Toyota ME16 processor';
e_machine[0x3c] = 'STMicroelectronics ST100 processor';
e_machine[0x3d] = 'Advanced Logic Corp. TinyJ embedded processor family';
e_machine[0x3e] = 'AMD x86-64';
e_machine[0x3f] = 'Sony DSP Processor';
e_machine[0x40] = 'Digital Equipment Corp. PDP-10';
e_machine[0x41] = 'Digital Equipment Corp. PDP-11';
e_machine[0x42] = 'Siemens FX66 microcontroller';
e_machine[0x43] = 'STMicroelectronics ST9+ 8/16 bit microcontroller';
e_machine[0x44] = 'STMicroelectronics ST7 8-bit microcontroller';
e_machine[0x45] = 'Motorola MC68HC16 Microcontroller';
e_machine[0x46] = 'Motorola MC68HC11 Microcontroller';
e_machine[0x47] = 'Motorola MC68HC08 Microcontroller';
e_machine[0x48] = 'Motorola MC68HC05 Microcontroller';
e_machine[0x49] = 'Silicon Graphics SVx';
e_machine[0x4a] = 'STMicroelectronics ST19 8-bit microcontroller';
e_machine[0x4b] = 'Digital VAX';
e_machine[0x4c] = 'Axis Communications 32-bit embedded processor';
e_machine[0x4d] = 'Infineon Technologies 32-bit embedded processor';
e_machine[0x4e] = 'Element 14 64-bit DSP Processor';
e_machine[0x4f] = 'LSI Logic 16-bit DSP Processor';
e_machine[0x8c] = 'TMS320C6000 Family';
e_machine[0xaf] = 'MCST Elbrus e2k';
e_machine[0xb7] = 'Arm 64-bits (Armv8/AArch64)';
e_machine[0xdc] = 'Zilog Z80';
e_machine[0xf3] = 'RISC-V';
e_machine[0xf7] = 'Berkeley Packet Filter';
e_machine[0x101] = 'WDC 65C816';

//Note in C these are prefixed with PT_
p_type[0x00000000] = 'NULL'; //	Program header table entry unused.
p_type[0x00000001] = 'LOAD'; //	Loadable segment.
p_type[0x00000002] = 'DYNAMIC'; //	Dynamic linking information.
p_type[0x00000003] = 'INTERP'; //	Interpreter information.
p_type[0x00000004] = 'NOTE'; //	Auxiliary information.
p_type[0x00000005] = 'SHLIB'; //	Reserved.
p_type[0x00000006] = 'PHDR'; //	Segment containing program header table itself.
p_type[0x00000007] = 'TLS'; //	Thread-Local Storage template.
p_type[0x60000000] = 'LOOS'; //	Reserved inclusive range. Operating system specific.
p_type[0x6fffffff] = 'HIOS'; //
p_type[0x70000000] = 'LOPROC'; //	Reserved inclusive range. Processor specific.
p_type[0x7fffffff] = 'HIPROC'; //

//Note in C these are prefixed with SHT_
sh_type[0x0] = 'NULL'; //	Section header table entry unused
sh_type[0x1] = 'PROGBITS'; //	Program data
sh_type[0x2] = 'SYMTAB'; //	Symbol table
sh_type[0x3] = 'STRTAB'; //	String table
sh_type[0x4] = 'RELA'; //	Relocation entries with addends
sh_type[0x5] = 'HASH'; //	Symbol hash table
sh_type[0x6] = 'DYNAMIC'; //	Dynamic linking information
sh_type[0x7] = 'NOTE'; //	Notes
sh_type[0x8] = 'NOBITS'; //	Program space with no data (bss)
sh_type[0x9] = 'REL'; //	Relocation entries, no addends
sh_type[0x0a] = 'SHLIB'; //	Reserved
sh_type[0x0b] = 'DYNSYM'; //	Dynamic linker symbol table
sh_type[0x0e] = 'INIT_ARRAY'; //	Array of constructors
sh_type[0x0f] = 'FINI_ARRAY'; //	Array of destructors
sh_type[0x10] = 'PREINIT_ARRAY'; //	Array of pre-constructors
sh_type[0x11] = 'GROUP'; //	Section group
sh_type[0x12] = 'SYMTAB_SHNDX'; //	Extended section indices
sh_type[0x13] = 'NUM'; //	Number of defined types.
sh_type[0x60000000] = 'LOOS'; //	Start OS-specific.

//Note in C these are prefixed with SHF_
sh_flags[0x1] = 'WRITE'; //	Writable
sh_flags[0x2] = 'ALLOC'; //	Occupies memory during execution
sh_flags[0x4] = 'EXECINSTR'; //	Executable
sh_flags[0x10] = 'MERGE'; //	Might be merged
sh_flags[0x20] = 'STRINGS'; //	Contains null-terminated strings
sh_flags[0x40] = 'INFO_LINK'; //	'sh_info' contains SHT index
sh_flags[0x80] = 'LINK_ORDER'; //	Preserve order after combining
sh_flags[0x100] = 'OS_NONCONFORMING'; //	Non-standard OS specific handling required
sh_flags[0x200] = 'GROUP'; //	Section is member of a group
sh_flags[0x400] = 'TLS'; //	Section hold thread-local data
sh_flags[0x0ff00000] = 'MASKOS'; //	OS-specific
sh_flags[0xf0000000] = 'MASKPROC'; //	Processor-specific
sh_flags[0x4000000] = 'ORDERED'; //	Special ordering requirement (Solaris)
sh_flags[0x8000000] = 'EXCLUDE'; //	Section is excluded unless referenced or allocated (Solaris)