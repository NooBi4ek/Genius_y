export interface BrowseItems {
  title: string;
  avatar: string;
  subtitle: string;
  raised: number;
  raisedCrpt: string;
  tokensAllocation: number;
  Participants: number;
  ParticipantsTotal: number;
  status: BrowseStatus;
  finishDate: string;
  id: string;
}

export type BrowseStatus = "active" | "completed" | "upcoming";
