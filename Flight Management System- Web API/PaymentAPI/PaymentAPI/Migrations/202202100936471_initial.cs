namespace PaymentAPI.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class initial : DbMigration
    {
        public override void Up()
        {
            
            
            CreateTable(
                "dbo.Payments",
                c => new
                    {
                        Payment_Id = c.Int(nullable: false, identity: true),
                        Ticket_id = c.Int(nullable: false),
                        Card_Type = c.String(),
                        Card_No = c.Int(nullable: false),
                        Total_Prize = c.Double(nullable: false),
                        Payment_Status = c.String(),
                    })
                .PrimaryKey(t => t.Payment_Id)
                .ForeignKey("dbo.Tickets", t => t.Ticket_id, cascadeDelete: true)
                .Index(t => t.Ticket_id);
            
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Payments", "Ticket_id", "dbo.Tickets");
            DropForeignKey("dbo.Tickets", "User_id", "dbo.UserAccounts");
            DropForeignKey("dbo.Tickets", "Flight_Id", "dbo.Flights");
            DropForeignKey("dbo.Flights", "Aircraft_id", "dbo.Aircraft");
            DropIndex("dbo.Tickets", new[] { "User_id" });
            DropIndex("dbo.Tickets", new[] { "Flight_Id" });
            DropIndex("dbo.Payments", new[] { "Ticket_id" });
            DropIndex("dbo.Flights", new[] { "Aircraft_id" });
            DropTable("dbo.UserAccounts");
            DropTable("dbo.Tickets");
            DropTable("dbo.Payments");
            DropTable("dbo.Flights");
            DropTable("dbo.Aircraft");
        }
    }
}
