### How it works

Ingesting PDF  : 
-  Each page is extracted from the pdf (depending on parameters passed for number of pages to be processed at a time)
-  Text is extracted along with the structure metadata (bbox of each word) in the form using [PyMuPDF](https://github.com/pymupdf/PyMuPDF?tab=readme-ov-file)
-  If no text is extracted/ text extracted has an unkown encoding, it is sent to [Pytesseract](https://github.com/tesseract-ocr/tesseract) and text is OCRed for the required language (language should be provided at input- functionality to predict the language is not yet built in- can be done using [clip](https://github.com/openai/CLIP) 
-  Extracted text is is segmented into 'blocks' (line of the same font) along with the bbox for each block
-  Blocks are sent to object detection and segment detector ([Layout detector](https://huggingface.co/vikp/layout_segmenter) and [column detector](https://huggingface.co/vikp/column_detector/tree/main) )
-  Each block is classifed into heading, text line, table- row/column/heading
-  Latex equations are [converted](https://huggingface.co/vikp/texify) into the right .md format 
-  The post processsing for converting [text to .md](https://huggingface.co/vikp/texify) format for each block is done
-  Blocks are stitched together for a page and Page numbers are added to each page
-  The pages are stitched together
-  The .md of the entire batch of pages is converted to json format with the required strcuture (content is mapped to headings and subheading, subheading to heading etc)
-  The json is flattened out to a csv with chunks of content mapped to headings
-  The chunks are post-processed to break down big chunks too smaller and smaller chunks combined to one to maintain uniformity of size
-  The chunks are embedded and stored in a vector DB, summaries are generated if required, transaltions are done if required
-  Images are detected for all pages through the pdf and sent to GPT for summarization and to minio for storage
-  The minio links for the image are inserted back into the chunked csv along with embeddings of the image summaries 
