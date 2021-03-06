module.exports = {
	collectCoverage: true,
	collectCoverageFrom: [
		'**/*.{js,jsx}',
		'!**/node_modules/**',
		'!**/.next/**',
		'!**/coverage/**',
		'!**/e2e/**',
		'!./*.js',
		'!**/*.d.ts',
	],
	setupFilesAfterEnv: ['./jest.setup.js'],
	moduleNameMapper: {
		'^@components(.*)$': '<rootDir>/components$1',
		'^@layouts(.*)$': '<rootDir>/layouts$1',
		'^@hooks(.*)$': '<rootDir>/hooks$1',
	},
}
