export interface TransformedData {
    name: string;
    PR_Open: number;
    PR_Merged: number;
    Commits: number;
    PR_Reviewed: number;
    PR_Comments: number;
    Incident_Alerts: number;
    Incidents_Resolved: number;
  }
  
  export const transformData = (data: any): TransformedData[] => {
    return data?.data?.AuthorWorklog?.rows.map((author: any) => {
      const transformed: TransformedData = {
        name: author.name,
        PR_Open: 0,
        PR_Merged: 0,
        Commits: 0,
        PR_Reviewed: 0,
        PR_Comments: 0,
        Incident_Alerts: 0,
        Incidents_Resolved: 0,
      };
      author.totalActivity.forEach((activity: any) => {
        if (activity.name === "PR Open") transformed.PR_Open = parseInt(activity.value);
        if (activity.name === "PR Merged") transformed.PR_Merged = parseInt(activity.value);
        if (activity.name === "Commits") transformed.Commits = parseInt(activity.value);
        if (activity.name === "PR Reviewed") transformed.PR_Reviewed = parseInt(activity.value);
        if (activity.name === "PR Comments") transformed.PR_Comments = parseInt(activity.value);
        if (activity.name === "Incident Alerts") transformed.Incident_Alerts = parseInt(activity.value);
        if (activity.name === "Incidents Resolved") transformed.Incidents_Resolved = parseInt(activity.value);
      });
      return transformed;
    });
  };
  