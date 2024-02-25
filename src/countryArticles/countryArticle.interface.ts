export interface wikiMediaApiResp {
  batchcomplete: string,
  query: {
    normalized: [
      {
        from: string,
        to: string,
      }
    ],
    pages: {
      18951905: {
        pageid: number,
        ns: number,
        title: string,
        extract: string,
      }
    }
  },
  limits: {
    extracts: number
  }
}
