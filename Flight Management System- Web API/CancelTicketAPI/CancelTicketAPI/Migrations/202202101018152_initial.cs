namespace CancelTicketAPI.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class initial : DbMigration
    {
        public override void Up()
        {
            
            
            CreateTable(
                "dbo.CancelTickets",
                c => new
                    {
                        Cancel_Id = c.Int(nullable: false, identity: true),
                        Ticket_id = c.Int(nullable: false),
                        Return_Amount = c.Double(nullable: false),
                    })
                .PrimaryKey(t => t.Cancel_Id)
                .ForeignKey("dbo.Tickets", t => t.Ticket_id, cascadeDelete: true)
                .Index(t => t.Ticket_id);
            
            
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.CancelTickets", "Ticket_id", "dbo.Tickets");
            DropForeignKey("dbo.Tickets", "User_id", "dbo.UserAccounts");
            DropForeignKey("dbo.Tickets", "Flight_Id", "dbo.Flights");
            DropForeignKey("dbo.Flights", "Aircraft_id", "dbo.Aircraft");
            DropIndex("dbo.Flights", new[] { "Aircraft_id" });
            DropIndex("dbo.Tickets", new[] { "User_id" });
            DropIndex("dbo.Tickets", new[] { "Flight_Id" });
            DropIndex("dbo.CancelTickets", new[] { "Ticket_id" });
            DropTable("dbo.UserAccounts");
            DropTable("dbo.Flights");
            DropTable("dbo.Tickets");
            DropTable("dbo.CancelTickets");
            DropTable("dbo.Aircraft");
        }
    }
}
