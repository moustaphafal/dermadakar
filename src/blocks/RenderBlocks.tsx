import React, { Fragment } from 'react'

import type { Page } from '@/payload-types'

import { ArchiveBlock } from '@/blocks/ArchiveBlock/Component'
import { CallToActionBlock } from '@/blocks/CallToAction/Component'
import { ContentBlock } from '@/blocks/Content/Component'
import { FormBlock } from '@/blocks/Form/Component'
import { MediaBlock } from '@/blocks/MediaBlock/Component'
import { HeroBlockComponent } from '@/blocks/HeroBlock/Component'
import { DoctorBlockComponent } from '@/blocks/DoctorBlock/Component'
import { TraitementBlockComponent } from '@/blocks/TraitementBlock/Component'
import { SpecialiteBlockComponent } from '@/blocks/SpecialiteBlock/Component'
import { CabinetBlockComponent } from '@/blocks/CabinetBlock/Component'
import { ReviewsBlockComponent } from '@/blocks/ReviewsBlock/Component'
import { GalleryBlockComponent } from '@/blocks/GalleryBlock/Component'
import { ContactBlockComponent } from '@/blocks/ContactBlock/Component'
import { QuoteBlockComponent } from '@/blocks/QuoteBlock/Component'

const blockComponents = {
  archive: ArchiveBlock,
  content: ContentBlock,
  cta: CallToActionBlock,
  formBlock: FormBlock,
  mediaBlock: MediaBlock,
  heroBlock: HeroBlockComponent,
  doctorBlock: DoctorBlockComponent,
  traitementBlock: TraitementBlockComponent,
  specialiteBlock: SpecialiteBlockComponent,
  cabinetBlock: CabinetBlockComponent,
  reviewsBlock: ReviewsBlockComponent,
  galleryBlock: GalleryBlockComponent,
  contactBlock: ContactBlockComponent,
  quoteBlock: QuoteBlockComponent,
}

export const RenderBlocks: React.FC<{
  blocks: Page['layout'][0][]
}> = (props) => {
  const { blocks } = props

  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0

  if (hasBlocks) {
    return (
      <Fragment>
        {blocks.map((block, index) => {
          const { blockType } = block

          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType]

            if (Block) {
              // Custom dermadakar blocks are full-width sections with their own padding
              const isFullWidthBlock = [
                'heroBlock',
                'doctorBlock',
                'traitementBlock',
                'specialiteBlock',
                'cabinetBlock',
                'reviewsBlock',
                'galleryBlock',
                'contactBlock',
                'quoteBlock',
              ].includes(blockType)

              return (
                <div className={isFullWidthBlock ? '' : 'my-16'} key={index}>
                  {/* @ts-expect-error there may be some mismatch between the expected types here */}
                  <Block {...block} disableInnerContainer />
                </div>
              )
            }
          }
          return null
        })}
      </Fragment>
    )
  }

  return null
}
