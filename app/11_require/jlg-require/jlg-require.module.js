import { grandParentDir } from './grandParentDir.directive';
import { parentDir } from './parentDir.directive';
import { childDir } from './childDir.directive';

angular.module('jlg-require', [])
	.directive('grandParentDir', grandParentDir)
	.directive('parentDir', parentDir)
	.directive('childDir', childDir);
