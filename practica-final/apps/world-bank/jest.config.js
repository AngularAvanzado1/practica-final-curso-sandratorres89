module.exports = {
  name: 'world-bank',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/world-bank',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
