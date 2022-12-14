import * as core from '@actions/core'

import {ConvertedMetadataVersion} from '../load/types'
import {VERSION_TEMPLATE} from './templates'
import {VersionChange} from './types'
import {renderTemplate} from './functions'

export function diffVersion(
  oldConvertedFrom: ConvertedMetadataVersion,
  newConvertedFrom: ConvertedMetadataVersion
): VersionChange {
  if (2 === oldConvertedFrom && !newConvertedFrom) {
    return 3
  }
}

export function formatVersion(version: VersionChange): string {
  if (!version) {
    return ''
  }

  core.info('Formatting version change')

  return renderTemplate(VERSION_TEMPLATE, {version}).trim()
}
